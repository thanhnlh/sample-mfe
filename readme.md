# Sample MFE - Angular Apps with Module Federation

## Project Overview

This project demonstrates how to build a Micro Frontend (MFE) application using Module Federation with Angular 18. It includes both a frontend and a backend application.

### Frontend Application

The frontend application is structured as an Angular workspace using a monorepo. It consists of three Angular applications:

1. Host: The host or container application. It manages the overall routing and dynamically loads other applications at runtime using Module Federation.
2. User-Feat: A remote or child application that is consumed by the host application.
3. Product-Feat: Another remote or child application that is also consumed by the host application.

#### How to run

1. Navigate to the frontend directory:
   `cd fe-apps`
2. Install dependencies:
   `npm install`
3. Start the backend server:
   `npm run run:all`

### Backend Application

The backend application is built with Hono.js, an ultra-fast web framework for edge computing. It provides routes with the following methods:

1. GET: Retrieve routes configuration.
2. POST: Add product to routes configuration.
3. DELETE: Remove product from routes configuration.

#### How to run

1. Navigate to the frontend directory:
   `cd be-apps`
2. Install dependencies:
   `npm install`
3. Start the backend server:
   `npm run dev`
