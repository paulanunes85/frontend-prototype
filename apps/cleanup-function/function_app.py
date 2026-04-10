import azure.functions as func
from azure.identity import DefaultAzureCredential
from azure.mgmt.appcontainers import ContainerAppsAPIClient
from azure.mgmt.containerregistry import ContainerRegistryManagementClient
from datetime import datetime, timezone, timedelta
import logging
import os

app = func.FunctionApp()

SUBSCRIPTION_ID = os.environ.get("AZURE_SUBSCRIPTION_ID", "")
RESOURCE_GROUP = os.environ.get("ACA_RESOURCE_GROUP", "")
ACR_RESOURCE_GROUP = os.environ.get("ACR_RESOURCE_GROUP", RESOURCE_GROUP)
ACR_NAME = os.environ.get("ACR_NAME", "")


@app.timer_trigger(schedule="0 0 * * * *", arg_name="timer")
def cleanup_expired_prototypes(timer: func.TimerRequest) -> None:
    """Runs every hour. Deletes expired Azure Container Apps and their ACR images."""
    if not SUBSCRIPTION_ID or not RESOURCE_GROUP:
        logging.error("Missing AZURE_SUBSCRIPTION_ID or ACA_RESOURCE_GROUP")
        return

    credential = DefaultAzureCredential()
    client = ContainerAppsAPIClient(credential, SUBSCRIPTION_ID)

    apps = client.container_apps.list_by_resource_group(RESOURCE_GROUP)
    deleted_count = 0
    deleted_repos: list[str] = []

    for app_instance in apps:
        tags = app_instance.tags or {}

        # Only process apps created by our generator
        if tags.get("created-by") != "foundry-prototype-generator":
            continue

        created_at_str = tags.get("created-at")
        ttl_hours = int(tags.get("ttl", "72"))

        if not created_at_str:
            logging.warning(f"App {app_instance.name} missing 'created-at' tag, skipping")
            continue

        try:
            created_at = datetime.fromisoformat(created_at_str)
        except ValueError:
            logging.warning(f"App {app_instance.name} has invalid 'created-at': {created_at_str}")
            continue

        expiry = created_at + timedelta(hours=ttl_hours)

        if datetime.now(timezone.utc) > expiry:
            project_name = tags.get("project", "")
            logging.info(
                f"Deleting expired app: {app_instance.name} "
                f"(created: {created_at_str}, ttl: {ttl_hours}h)"
            )
            client.container_apps.begin_delete(RESOURCE_GROUP, app_instance.name)
            deleted_count += 1

            if project_name:
                deleted_repos.append(f"prototypes/{project_name}")

    # Prune ACR images for deleted prototypes
    if ACR_NAME and deleted_repos:
        _cleanup_acr_images(credential, deleted_repos)

    logging.info(f"Cleanup complete. Deleted {deleted_count} expired prototype(s).")


def _cleanup_acr_images(
    credential: DefaultAzureCredential,
    repo_names: list[str],
) -> None:
    """Delete ACR repositories for expired prototypes."""
    try:
        acr_client = ContainerRegistryManagementClient(credential, SUBSCRIPTION_ID)
        for repo_name in repo_names:
            try:
                acr_client.registries.delete(ACR_RESOURCE_GROUP, ACR_NAME)
                logging.info(f"Queued ACR repo deletion: {repo_name}")
            except Exception as e:
                logging.warning(f"Failed to delete ACR repo {repo_name}: {e}")
    except Exception as e:
        logging.error(f"ACR cleanup failed: {e}")
