#!/usr/bin/env bash
# Configure GitHub <-> Azure OIDC federation
# Run this AFTER provisioning infrastructure.
# See: https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure

set -euo pipefail

echo "==> This script helps configure OIDC federation between GitHub Actions and Azure."
echo "==> Make sure you have already run provision.sh first."
echo ""
echo "Steps to complete manually:"
echo ""
echo "1. Get the managed identity client ID from the Bicep outputs"
echo "2. In your GitHub repo, go to Settings > Secrets and Variables > Actions"
echo "3. Add these secrets:"
echo "   - AZURE_CLIENT_ID       (from Bicep output: identityClientId)"
echo "   - AZURE_TENANT_ID       (your Azure AD tenant ID)"
echo "   - AZURE_SUBSCRIPTION_ID (your subscription ID)"
echo "   - ACR_LOGIN_SERVER      (from Bicep output: acrLoginServer)"
echo "   - ACR_USERNAME          (from az acr credential show)"
echo "   - ACR_PASSWORD          (from az acr credential show)"
echo "   - ACA_ENVIRONMENT       (from Bicep output: acaEnvironmentId)"
echo "   - ACA_RESOURCE_GROUP    (e.g., rg-prototype-generator-dev)"
echo ""
echo "4. Assign the managed identity Contributor role on the resource group:"
echo "   az role assignment create \\"
echo "     --assignee <identityClientId> \\"
echo "     --role Contributor \\"
echo "     --scope /subscriptions/<sub-id>/resourceGroups/<rg-name>"
