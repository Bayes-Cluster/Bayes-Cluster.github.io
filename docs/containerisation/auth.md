---
sidebar_position: 2
---

# Authentication with Keycloak

We use Keycloak as Identity Provider to provide secure, centralised authentication and user management for our paltform. 


## General Login Flow

1. The user attempts to access a protected application or resource.
2. The application redirects the user to Keycloak's login endpoint.
3. The user enters their credentials on the Keycloak login page.
4. Upon successful authentication, Keycloak redirects the user back to the application using a pre-configured redirect URI, along with an authorization code.
5. The application exchanges the authorization code for an ID token and access token by communicating with Keycloak’s token endpoint.
6. The ID token is used to identify the user, and the access token can be used to call protected APIs or services on behalf of the user.
7. The user is now authenticated within the application.
8. Keycloak login URL : `https://auth.uicstat.com/realms/bayes-cluster/account/`

## Kubeflow as Example

Kubeflow uses Keycloak as its Identity Provider to handle user authentication via OIDC. When a user tries to access the Kubeflow dashboard:
1. The user navigates to the Kubeflow UI.
2. Kubeflow detects that the user is not authenticated and redirects them to Keycloak’s login page.
3. The user signs in with their Keycloak credentials.
4. Upon successful login, Keycloak redirects the user back to Kubeflow’s configured redirect URI with an authorization code.
5. Kubeflow exchanges this authorization code for tokens from Keycloak.
6. Using the ID token, Kubeflow identifies the user and creates a session.
7. The user gains access to Kubeflow’s dashboard and services based on their permissions.

Further usage of kubeflow, please follow [kubeflow](./kubeflow/kubeflow.md)