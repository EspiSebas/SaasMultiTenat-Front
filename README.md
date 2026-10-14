# SaaSMultiTenant Frontend

**A multi-tenant SaaS web application built with Angular and Bootstrap.**

This project provides the user interface for a SaaS platform designed to help companies manage their business operations through a centralized web application. It communicates with a REST API backend to handle company-specific information and business processes.

The frontend is part of the [SaaSMultiTent Backend](https://github.com/EspiSebas/SaasMultiTent) project.

## Overview

SaaSMultiTenant is designed around a multi-tenant architecture, allowing different companies to manage their business information within a single platform while keeping their data logically separated.

The frontend focuses on providing an accessible, maintainable, and responsive interface for interacting with the backend services.

## Features

- **Authentication:** User login and integration with the backend authentication system.
- **Company Management:** Access company-specific business information.
- **Inventory Management:** Manage products, categories, quantities, and prices.
- **Sales Management:** Interact with sales-related operations.
- **Dashboard:** Present relevant business information in a centralized interface.
- **REST API Integration:** Communicate with the backend through HTTP requests.
- **Responsive UI:** Build user interfaces using Bootstrap components and responsive layouts.

*Features are subject to the current implementation and ongoing development.*

## Tech Stack

| Technology | Purpose |
|---|---|
| Angular 18 | Frontend framework |
| TypeScript | Typed application development |
| Bootstrap 5 | Responsive UI and styling |
| RxJS | Reactive programming and asynchronous data handling |
| Angular Router | Client-side navigation |
| Angular Forms | Form handling and user input |
| Node.js and npm | Development environment and dependency management |
| Angular CLI | Development server and production builds |

## Architecture

The frontend follows a component-based architecture using Angular.

Its main responsibilities include:

- Rendering application pages and reusable UI components.
- Managing navigation between application views.
- Handling forms and user interactions.
- Communicating with the backend REST API.
- Displaying API responses and handling request errors.
- Integrating authentication with protected application resources.

### System Architecture

```text
┌─────────────────────────────┐
│        Angular Frontend     │
│                             │
│  Components and Pages       │
│  Services and Forms         │
│  Routing and HTTP Requests  │
└──────────────┬──────────────┘
               │
               │ HTTP / REST API
               │
┌──────────────▼──────────────┐
│       Spring Boot Backend   │
│                             │
│  Authentication and JWT    │
│  Company and Tenant Logic   │
│  Inventory and Sales        │
└──────────────┬──────────────┘
               │
┌──────────────▼──────────────┐
│           MySQL             │
└─────────────────────────────┘
```

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, included with Node.js
- [Angular CLI](https://angular.dev/tools/cli)
- Git
- A running instance of the backend API for integrated functionality

### 1. Clone the repository

```bash
git clone https://github.com/EspiSebas/SaasMultiTenat-Front.git
cd SaasMultiTenat-Front
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the backend API

Configure the frontend's API base URL according to your Angular environment configuration and the address where the Spring Boot backend is running.

For local development, the backend might be available at:

```text
http://localhost:8080
```

Use the actual API base URL configured by your backend. If the frontend and backend run on different origins, configure the appropriate CORS settings on the backend.

### 4. Start the development server

```bash
npm start
```

Alternatively, use the Angular CLI:

```bash
ng serve
```

Open your browser at:

```text
http://localhost:4200
```

The development server automatically reloads when source files change.

## Build

To create a production build, run:

```bash
npm run build
```

The generated application files will be placed in the `dist/` directory.

## Testing

Run the unit tests with:

```bash
npm test
```

The project is configured to use Jasmine and Karma for testing.

## Related Repository

**Backend:** [SaaSMultiTent — Spring Boot API](https://github.com/EspiSebas/SaasMultiTent)

The backend provides the API and business logic consumed by this Angular application.

## Author

**Sebastian Espinosa**

Software Development Technologist | Backend & Full Stack Developer

- GitHub: [@EspiSebas](https://github.com/EspiSebas)
- LinkedIn: [sebastian-espinosa-dev](https://www.linkedin.com/in/sebastian-espinosa-dev/)

---

*Built as a practical project to strengthen skills in frontend development, REST API integration, application architecture, and full-stack software engineering.*
