# 🍽️ Dish Management System

A full-stack foundation for building a dish and menu management platform, with a React frontend and backend services for API and business logic.

## Overview

This repository currently contains:

- **Frontend (`frontend/`)**: React application scaffolded with Create React App
- **Java Backend (`dishbackend/`)**: Spring Boot API service with security and JPA support
- **Node Backend (`backend/`)**: Experimental Express service prototype

The project is structured so teams can evolve UI, API, and data layers independently.

## Repository Structure

```text
Dish_Management_System/
├── frontend/             # React client application
│   ├── public/
│   ├── package.json
│   └── README.md
├── dishbackend/          # Spring Boot backend service
│   ├── .mvn/
│   └── pom.xml
├── backend/              # Node/Express backend prototype
│   └── server.js
├── package.json          # Root-level Node dependencies
└── LICENSE
```

## Tech Stack

### Frontend
- React 19
- React Router
- React DnD
- Axios
- Tailwind CSS (dependency present)

### Java Backend
- Java 17
- Spring Boot 3.2
- Spring Web
- Spring Security
- Spring Data JPA
- MySQL Connector
- JWT (`jjwt`)
- Lombok

### Node Backend (Prototype)
- Node.js + Express
- CORS
- OpenAI SDK

## Prerequisites

Install the tools below before running modules:

- **Node.js** 18+
- **npm** 9+
- **Java** 17+
- **Maven** 3.9+
- **MySQL** 8+ (for Spring Boot data layer)

## Quick Start

### 1) Clone

```bash
git clone https://github.com/Gowtham232004/Dish_Management_System.git
cd Dish_Management_System
```

### 2) Frontend Setup (`frontend/`)

```bash
cd frontend
npm install
npm start
```

App runs at: `http://localhost:3000`

### 3) Java Backend Setup (`dishbackend/`)

```bash
cd dishbackend
mvn spring-boot:run
```

Typical Spring Boot API port: `http://localhost:8080`

> Configure database and security properties before production use.

### 4) Node Backend Prototype (`backend/`)

```bash
cd backend
npm install
node server.js
```

Expected prototype port: `http://localhost:5000`

> Note: `backend/server.js` is currently wrapped in a block comment and should be treated as an experimental reference.

## Configuration

### Java Backend
Create or update Spring Boot configuration (such as `application.properties` or environment variables) for:

- Database URL, username, password
- JWT secret and expiration
- CORS allowed origins

### Node Backend Prototype
If you use the prototype service, set:

```env
OPENAI_API_KEY=your_api_key_here
```

in a `.env` file inside `backend/`.

## Development Scripts

### Frontend (`frontend/package.json`)

- `npm start` — Run dev server
- `npm test` — Run tests
- `npm run build` — Production build

### Root (`package.json`)

Root-level dependencies are present; module-level execution is recommended for active development.

## Current Project Status

This repository provides a strong starter layout for a dish management platform. The Java backend dependencies are production-oriented, while frontend and Node layers are scaffolds/prototypes that can be expanded with domain modules (auth, dish catalog, inventory, analytics).

## Recommended Next Steps

1. Add Java source packages (`controller`, `service`, `repository`, `entity`, `security`)
2. Implement frontend routes and pages for dashboard, dishes, and categories
3. Wire frontend API client to Spring Boot endpoints
4. Add environment-specific configuration profiles
5. Add CI checks for build, test, and lint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit focused changes
4. Open a pull request with clear context

## License

This project is licensed under the terms in the [LICENSE](LICENSE) file.
