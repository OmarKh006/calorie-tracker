# 🥗 Calorie Tracker

A React-based web application to help you log and monitor your daily calorie intake. This is my first React project!

🔗 **Live Demo:** [View on GitHub Pages](https://omarkh006.github.io/calorie-tracker/)

---

## ✨ Features

- **Log Meals** — Add food records with date, meal type (Breakfast, Lunch, Dinner, Snacks), content, and calorie count
- **Date Filtering** — Filter your records by date to view what you ate on any given day
- **Daily Calorie Total** — Automatically calculates and displays total calories for the selected date
- **Interactive Calories** — Click on a calorie value to increment it by 10
- **Input Validation** — Invalid records (0 or negative calories) are flagged visually and in the UI
- **Modal Form** — Clean modal dialog for adding new food records without leaving the page
- **Empty State** — Friendly "No Records To Display" message when no records match the selected date

---

## 🛠️ Tech Stack

| Technology                                                | Usage                            |
| --------------------------------------------------------- | -------------------------------- |
| [React](https://react.dev/)                               | UI components & state management |
| [Vite](https://vitejs.dev/)                               | Build tool & dev server          |
| [CSS Modules](https://github.com/css-modules/css-modules) | Scoped component styling         |
| [react-modal](https://github.com/reactjs/react-modal)     | Accessible modal dialog          |
| [GitHub Pages](https://pages.github.com/)                 | Deployment                       |

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

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```
