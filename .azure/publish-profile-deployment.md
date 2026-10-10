# Azure App Service Publish Profile Deployment

Use this project as a single ASP.NET Core App Service deployment. The server project serves the Vite build through ASP.NET Core static assets and falls back to `index.html` for React routes.

## Required App Settings

Set these values in Azure App Service Configuration:

- `ASPNETCORE_ENVIRONMENT=Production`
- `Portfolio__PublicBaseUrl=https://buildwithsandeepmvn.com`
- `AzureCommunicationEmail__ConnectionString=<azure-communication-services-email-connection-string>`
- `AzureCommunicationEmail__SenderAddress=<verified-sender-address>`
- `AzureCommunicationEmail__RecipientAddress=<contact-recipient-address>`

## Publish Flow

1. Build the React client from `smwebapp.client`.
2. Publish `SMWebApp.Server` to Azure App Service using the App Service publish profile.
3. Verify these routes after deployment:
   - `/`
   - `/projects/wpi`
   - `/blog/azure-ai-workflows`
   - `/api/projects`
   - `/api/blog`
4. Submit contact and newsletter forms after configuring Azure Communication Services Email.

## Local Checks

- `npm run build` from `smwebapp.client`
- `npm run lint` from `smwebapp.client`
- `dotnet build` from the workspace root or `SMWebApp.Server`
