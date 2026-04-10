// Managed Identity + GitHub OIDC federation + role assignment for GitHub Actions

param name string
param location string
param githubOrg string
param githubRepo string

resource managedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: name
  location: location
}

// Federated credential: allow GitHub Actions from this repo to authenticate
resource federatedCredential 'Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2023-01-31' = {
  parent: managedIdentity
  name: 'github-deploy'
  properties: {
    issuer: 'https://token.actions.githubusercontent.com'
    subject: 'repo:${githubOrg}/${githubRepo}:ref:refs/heads/main'
    audiences: [
      'api://AzureADTokenExchange'
    ]
  }
}

// Role assignment: Contributor on the resource group
// Allows GitHub Actions to create/delete Container Apps and push to ACR
resource contributorRoleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(resourceGroup().id, managedIdentity.id, 'Contributor')
  properties: {
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'b24988ac-6180-42a0-ab88-20f7382dd24c') // Contributor
    principalId: managedIdentity.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

output clientId string = managedIdentity.properties.clientId
output principalId string = managedIdentity.properties.principalId
