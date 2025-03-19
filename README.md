# NewRL (New URL)

[![Vercel](https://vercel.com/button)](https://vercel.com/new-project?template=https://github.com/niloydiu/url)

NewRL is a full-stack URL shortening service that allows users to create shortened URLs with custom aliases or auto-generated shortcodes.

**Live Demo:** [https://nrl-zeta.vercel.app/](https://nrl-zeta.vercel.app/)

**Repository:** [https://github.com/niloydiu/url.git](https://github.com/niloydiu/url.git)

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
  - [Frontend Installation](#frontend-installation)
  - [Backend Installation](#backend-installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Credits and Contact](#credits-and-contact)

## Project Overview

NewRL is designed to simplify long URLs into shorter, more manageable links. Users can provide a custom alias or let the system generate one automatically using nanoid. The service also provides features to view and delete created URLs.

## Tech Stack

-   **Frontend:**
    -   React 19
    -   Tailwind CSS 4
    -   Vite 6
-   **Backend:**
    -   Express.js
    -   MongoDB
    -   Mongoose
-   **Deployment:**
    -   Vercel (Frontend & Backend)

## Features

1.  **Custom Aliases:** Create shortened URLs with optional custom aliases.
2.  **Auto-Generation:** Auto-generate shortened URLs using nanoid if no custom alias is provided.
3.  **Copy to Clipboard:** Easily copy shortened URLs to the clipboard.
4.  **Delete URLs:** Delete unwanted shortened URLs.
5.  **View All URLs:** View a list of all created URLs.
6.  **URL Redirection:** Redirect to the original URL when accessing the shortened URL.

## Project Structure

-   **Frontend (React):**
    -   `src/components/`: Header, Footer, SearchBar, Content
    -   `src/context/`: Context API for state management
    -   `src/App.jsx`: Main application component
    -   Responsive design with Tailwind CSS.
-   **Backend (Express):**
    -   MVC architecture (Models, Controllers, Routes)
    -   `models/`: MongoDB schemas
    -   `controllers/`: Request handlers
    -   `routes/`: API routes
    -   Environment configuration with dotenv.

## API Endpoints

-   `POST /create`: Create a new shortened URL.
-   `GET /all`: Get all URLs.
-   `GET /:customUrl`: Redirect to the original URL.
-   `DELETE /:customUrl`: Delete a URL.

## Installation

### Frontend Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/niloydiu/url.git](https://github.com/niloydiu/url.git)
    cd url/client
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

### Backend Installation

1.  Navigate to the backend directory:

    ```bash
    cd ../server
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

## Environment Variables

-   **Backend:**
    -   `PORT`: Port for the Express server (e.g., `5000`).
    -   `MONGODB_URI`: MongoDB connection string.
    -   `CLIENT_URL`: The frontend URL (e.g., `https://nrl-zeta.vercel.app/`).

Create a `.env` file in the `server` directory and add these variables.
