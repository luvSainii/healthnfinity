# Healthnfinity

Healthnfinity is a full-stack web application designed to manage user logs, built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project includes both frontend and backend components, utilizing Docker for containerization.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User log management with CRUD operations.
- Role-based access control for admin actions.
- Pagination for user logs display.
- Responsive user interface built with Material-UI.
- Notifications using react-hot-toast.

## Technologies Used

- **Frontend**: React, Next.js, Material-UI, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JSON Web Token (JWT)
- **Docker**: Containerization for both frontend and backend services.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/luvSainii/healthnfinity
   cd healthnfinity
2. Navigate to the backend and frontend directories and install the dependencies:
     Start the backend server:

        ```bash
       cd backend
       npm run dev

      Start the frontend server:

         ```bash
        cd ../frontend
        npm run dev
