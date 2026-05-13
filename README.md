# 🥗 Calorie Tracker

A full-stack web application to help you log and monitor your daily calorie intake.
Built with React on the frontend and an Express + SQLite backend, structured as a monorepo.

🔗 **Live Demo:** [View on GitHub Pages](https://omarkh006.github.io/calorie-tracker/)

---

## 📁 Project Structure

```
calorie-tracker/
├── packages/
│   ├── client/        # React frontend (Vite)
│   └── server/        # Express backend (SQLite)
├── lerna.json
└── package.json
```

---

## ✨ Features

- **Log Meals** — Add food records with date, meal type (Breakfast, Lunch, Dinner, Snacks), content, and calorie count
- **Date Filtering** — Filter your records by date to view what you ate on any given day
- **Daily Calorie Total** — Automatically calculates and displays total calories for the selected date
- **Input Validation** — Invalid records (0 or negative calories) are flagged visually and in the UI
- **Modal Form** — Clean modal dialog for adding new food records without leaving the page
- **Empty State** — Friendly "No Records To Display" message when no records match the selected date
- **Persistent Storage** — Records are saved to a local SQLite database via a REST API

---

## 🛠️ Tech Stack

### Frontend

| Technology                                                | Usage                            |
| --------------------------------------------------------- | -------------------------------- |
| [React](https://react.dev/)                               | UI components & state management |
| [Vite](https://vitejs.dev/)                               | Build tool & dev server          |
| [CSS Modules](https://github.com/css-modules/css-modules) | Scoped component styling         |
| [react-modal](https://github.com/reactjs/react-modal)     | Accessible modal dialog          |

### Backend

| Technology                                       | Usage           |
| ------------------------------------------------ | --------------- |
| [Node.js](https://nodejs.org/)                   | Runtime         |
| [Express](https://expressjs.com/)                | REST API server |
| [SQLite3](https://www.npmjs.com/package/sqlite3) | Local database  |

### Tooling

| Technology                                                        | Usage               |
| ----------------------------------------------------------------- | ------------------- |
| [Lerna](https://lerna.js.org/)                                    | Monorepo management |
| [npm Workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) | Dependency hoisting |
| [GitHub Pages](https://pages.github.com/)                         | Frontend deployment |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/OmarKh006/calorie-tracker.git
   cd calorie-tracker
   ```

2. **Install all dependencies** (installs both client and server from the root)

   ```bash
   npm install
   ```

3. **Start both client and server**

   ```bash
   npm run dev
   ```

   - Frontend runs on `http://localhost:5173`
   - Backend runs on `http://localhost:3001`

---

## 🔌 API Endpoints

| Method | Endpoint       | Description                    |
| ------ | -------------- | ------------------------------ |
| GET    | `/api/check`   | Check if the server is running |
| GET    | `/api/records` | Get all calorie records        |
| POST   | `/api/records` | Add a new calorie record       |

---

## 📦 Running Packages Individually

```bash
# Run client only
npm run dev --workspace=packages/client

# Run server only
npm run dev --workspace=packages/server
```

### Build for Production

```bash
npm run build
```
