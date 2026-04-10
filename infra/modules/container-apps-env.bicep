// Azure Container Apps Environment — Consumption plan

param name string
param location string

resource logAnalytics 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: '${name}-logs'
  location: location
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
  }
}

resource acaEnvironment 'Microsoft.App/managedEnvironments@2023-05-01' = {
  name: name
  location: location
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalytics.properties.customerId
        sharedKey: logAnalytics.listKeys().primarySharedKey
      }
    }
  }
}

output environmentId string = acaEnvironment.id
output defaultDomain string = acaEnvironment.properties.defaultDomain
