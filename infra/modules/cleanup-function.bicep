// Azure Functions App — Python, Consumption plan, for TTL cleanup

param name string
param location string
param acaResourceGroup string

resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: replace('${name}sa', '-', '')
  location: location
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
}

resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: '${name}-plan'
  location: location
  kind: 'linux'
  sku: {
    name: 'Y1'
    tier: 'Dynamic'
  }
  properties: {
    reserved: true
  }
}

resource functionApp 'Microsoft.Web/sites@2023-01-01' = {
  name: name
  location: location
  kind: 'functionapp,linux'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'PYTHON|3.11'
      appSettings: [
        { name: 'AzureWebJobsStorage', value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccount.name};EndpointSuffix=core.windows.net;AccountKey=${storageAccount.listKeys().keys[0].value}' }
        { name: 'FUNCTIONS_EXTENSION_VERSION', value: '~4' }
        { name: 'FUNCTIONS_WORKER_RUNTIME', value: 'python' }
        { name: 'ACA_RESOURCE_GROUP', value: acaResourceGroup }
        { name: 'AZURE_SUBSCRIPTION_ID', value: subscription().subscriptionId }
      ]
    }
  }
  identity: {
    type: 'SystemAssigned'
  }
}

output functionAppName string = functionApp.name
output principalId string = functionApp.identity.principalId
