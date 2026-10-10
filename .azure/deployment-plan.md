# buildwithsandeepmvn Deployment Plan

Status: Ready for Publish Profile Deployment

## Summary

Build the existing React/Vite client and ASP.NET Core server into a production-ready personal portfolio hosted on Azure App Service by publish profile.

## Deployment Path

- Target: Azure App Service
- Method: Publish profile / Visual Studio or equivalent `dotnet publish`
- Infrastructure as code: Not included in this version
- Runtime: ASP.NET Core `net10.0`

## App Settings

Configure these values in Azure App Service application settings:

- `Portfolio:PublicBaseUrl`
- `AzureCommunicationEmail:ConnectionString`
- `AzureCommunicationEmail:SenderAddress`
- `AzureCommunicationEmail:RecipientAddress`

## Validation

- Run client build and lint.
- Run server build.
- Verify static fallback routing for React routes.
- Verify contact/newsletter validation and configured email delivery behavior.
