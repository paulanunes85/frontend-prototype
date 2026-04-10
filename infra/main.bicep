// Foundry Prototype Generator — Azure Infrastructure
// Provisions: ACR, ACA Environment, Cleanup Function, Managed Identity

targetScope = 'resourceGroup'

@description('Azure region for all resources')
param location string = resourceGroup().location

@description('Environment name (dev, prod)')
param environmentName string = 'dev'

@description('GitHub organization for OIDC federation')
param githubOrg string = 'company-name'

@description('GitHub repository name for OIDC federation')
param githubRepo string = 'foundry-prototype-generator'

var prefix = 'fpg-${environmentName}'

module acr 'modules/container-registry.bicep' = {
  name: 'container-registry'
  params: {
    name: replace('acr${prefix}', '-', '')
    location: location
  }
}

module acaEnv 'modules/container-apps-env.bicep' = {
  name: 'container-apps-env'
  params: {
    name: 'aca-env-${prefix}'
    location: location
  }
}

module cleanupFunc 'modules/cleanup-function.bicep' = {
  name: 'cleanup-function'
  params: {
    name: 'func-cleanup-${prefix}'
    location: location
    acaResourceGroup: resourceGroup().name
  }
}

module identity 'modules/identity.bicep' = {
  name: 'managed-identity'
  params: {
    name: 'id-${prefix}'
    location: location
    githubOrg: githubOrg
    githubRepo: githubRepo
  }
}

output acrLoginServer string = acr.outputs.loginServer
output acaEnvironmentId string = acaEnv.outputs.environmentId
output acaEnvironmentDomain string = acaEnv.outputs.defaultDomain
output functionAppName string = cleanupFunc.outputs.functionAppName
output identityClientId string = identity.outputs.clientId
