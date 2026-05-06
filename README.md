# Kaya Games

Kaya Games is a community-driven game review platform where users can register, browse reviews written by others, and publish their own. Each review can include a Kaya reaction image and full text content, and authors can edit or delete their own posts.

---

## Features

- Register and log in to your account
- Browse all game reviews on the Review List page
- Read full review details including author and reaction image
- Create new reviews with a title, body, and Kaya reaction
- Edit or delete your own reviews
- Home and About pages with site context

---

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React 18, React Router v6, Vite 5       |
| Backend   | json-server (file-based REST API)       |
| Auth      | Custom login/register via localStorage  |
| Language  | JavaScript / JSX                        |

---

## Prerequisites

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) v18 or higher (includes npm)
- json-server installed globally:

```bash
npm install -g json-server
```

---

## Installation & Setup

### 1. Clone both repositories

```bash
git clone https://github.com/jaymenelson56/kaya-games.git
git clone https://github.com/jaymenelson56/kaya-games-api.git
```

### 2. Install dependencies

```bash
cd kaya-games
npm install
```

### 3. Start the API server

In a separate terminal, from the `kaya-games-api` directory:

```bash
cd kaya-games-api
json-server -p 9001 database.json
```

The API will be available at `http://localhost:9001`.

### 4. Start the frontend

Back in the `kaya-games` directory:

```bash
npm run dev
```

Open the URL shown in the terminal — typically `http://localhost:5173`.

---

## Available Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint to check code quality     |

---

## Project Structure

```
kaya-games/
├── public/             # Static assets (images)
├── src/
│   ├── components/
│   │   ├── Auth/       # Login and Register forms
│   │   ├── Review/     # ReviewList, ReviewDetails, CreateReview
│   │   ├── Nav/        # Navigation bar
│   │   ├── Home/       # Home page
│   │   ├── About/      # About page
│   │   ├── View/       # Route management
│   │   └── services/   # API service functions
│   ├── App.jsx         # Root component and route setup
│   └── main.jsx        # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Related Repositories

- [kaya-games-api](https://github.com/jaymenelson56/kaya-games-api) — JSON database and API server
