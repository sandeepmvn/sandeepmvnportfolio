---
slug: elixir-social
title: Healthcare Professional Network
summary: HIPAA-compliant social networking platform exclusively for healthcare professionals, with NPI credential verification, multi-model AI content analysis, and cross-platform mobile apps.
date: 2025-08-12
featured: true
tags: [React, React Native, ASP.NET Core, Azure, AI]
techStack: [React 18, React Native, ASP.NET Core 8, Azure, Azure AI Foundry, Google Vertex AI, Cerebras, TypeScript]
---

## Overview

This is a full-stack social networking platform built exclusively for healthcare professionals, medical students, and researchers. It combines credential-verified networking, secure knowledge sharing, and multi-model AI-assisted medical content analysis — all under a HIPAA-compliant architecture.

As Technical Lead and Solution Architect on a team of 5 (June 2025 – February 2026), I designed the full system from database schema through mobile apps and AI integrations.

## Engineering Highlights

- Built cross-platform mobile app using React Native targeting Android and iOS, with native navigation, push notifications, and a social feed
- Developed responsive React 18 + TypeScript web application with a three-tab feed (For You / Following / Questions), infinite scroll, post creation, and real-time interactions
- Designed and implemented ASP.NET Core 8.0 RESTful API following Clean Architecture with JWT authentication, NPI credential verification, and OAuth integration
- Architected a 30+ table SQL database schema with multiple EF Core DbContexts (Main, Audit, ReadOnly) supporting HIPAA audit logging
- Deployed on Azure — App Service, Blob Storage, Notification Hubs, and Application Insights

## Multi-Model AI Integration

Integrated multiple AI providers for medical post analysis and a streaming chat assistant with prompt injection protection and medical ethics guidelines:

- Google Vertex AI (Gemini 2.5 Flash Lite)
- Cerebras
- Azure AI Foundry Models
- Grok (xAI)

## HIPAA Architecture

- Encrypted data handling, audit trails, and access controls across all layers
- Dedicated Audit DbContext for HIPAA-compliant activity logging
- NPI credential verification to restrict access to verified healthcare professionals
- ReadOnly DbContext separation for safe reporting and analytics queries

## Outcome

This platform demonstrates that healthcare collaboration platforms can deliver a modern social product experience — infinite scroll, real-time interactions, mobile apps — without compromising on the compliance, security, and verification requirements that healthcare demands. The multi-model AI layer provides medical content analysis at lower cost by routing requests across providers based on task complexity.
