---
slug: wpi
title: Automotive Warranty Platform
summary: Cloud-native warranty claims management platform replacing a legacy claims system, onboarding an initial automotive dealer cohort with Phase 2 targeting hundreds of dealers.
date: 2026-01-15
featured: true
tags: [Azure, ASP.NET Core, React, Power BI, Azure AI]
techStack: [Azure, ASP.NET Core, React, Power BI, Azure AI, SignalR, MediatR, Azure Functions]
---

## Overview

This platform replaces a legacy warranty claims system with a fully cloud-native platform on Azure, built to handle the full warranty lifecycle — from dealer claim submission through manufacturer payment reconciliation. Phase 1 onboarded an initial dealer cohort; Phase 2 targets hundreds of automotive dealers.

As Technical Lead and Solution Architect on a team of 10, I led the full delivery lifecycle including architecture, CI/CD pipelines, Power BI reporting, UAT coordination, and hypercare support.

## Engineering Highlights

- Designed end-to-end Azure infrastructure: App Service, Azure Functions (Flex Consumption), Service Bus, API Management, Key Vault, Application Insights, Storage Account, and Azure Email Communication Service — deployed in Central US for low-latency client access
- Built ASP.NET Core backend with Entity Framework Core, implementing CQRS via MediatR with a claim lifecycle engine governing RO status transitions, billing validation, chargeback/reversal handling, and manufacturer payment reconciliation
- Developed React.js portals for both dealers and internal operations teams, with role-based access, real-time updates via SignalR, and session management
- Integrated Azure AI Foundry (GPT) and Azure Document Intelligence for automated claim classification (Complex vs Recall) and document processing, reducing manual triage effort
- Engineered an OEM payment CSV processing pipeline with multi-priority RO matching logic (exact, normalized, suffix, reverse suffix) and a custom Difference Rule for accurate dealer invoicing
- Built QuickBooks IIF integration for automated invoice generation
- Implemented background Azure Functions including a timezone-aware billing window expiry scanner and scheduled status recalculation jobs
- Designed Azure SQL schema across two databases (claims and identity) with documentation covering indexes, purge/retention policies, and backup procedures

## Power BI Reporting

- Manager dashboards and dealer KPA watchlists
- Claim submission age reports and drill-down adjustment reports with export capabilities
- Migrated legacy reports from personal workspaces to dedicated organizational workspaces (Platform Reports – Production)
- Managed workspace access, Per User PPU licensing, and production environment setup

## Open Source Impact

Built [@sandeepmvn/react-pdf-annotator-v2](https://www.npmjs.com/package/@sandeepmvn/react-pdf-annotator-v2) for dealer document workflows — eliminating a $10,999/year Syncfusion PDF SDK licensing cost while delivering the same enterprise annotation capabilities in production.

## Outcome

Replaced a legacy system with a maintainable Azure platform covering the full warranty lifecycle. AI-assisted claim classification reduced manual triage effort. The OEM payment pipeline automated a previously manual payment reconciliation process. Open-source PDF annotator saved $10,999/year in licensing.
