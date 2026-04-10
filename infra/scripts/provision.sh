#!/usr/bin/env bash
# Provision Azure infrastructure for Foundry Prototype Generator
# Usage: ./provision.sh <environment> (dev|prod)

set -euo pipefail

ENV="${1:-dev}"
RG="rg-prototype-generator-${ENV}"
LOCATION="eastus2"

echo "==> Creating resource group: ${RG}"
az group create --name "$RG" --location "$LOCATION" --output none

echo "==> Deploying Bicep template (${ENV})..."
az deployment group create \
  --resource-group "$RG" \
  --template-file ../main.bicep \
  --parameters "../parameters/${ENV}.bicepparam" \
  --output table

echo "==> Done. Outputs:"
az deployment group show \
  --resource-group "$RG" \
  --name main \
  --query properties.outputs \
  --output table
