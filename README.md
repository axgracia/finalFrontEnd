url for backend section- https://github.com/axgracia/Expense-Tracker---Project-1.git

# Expense Tracker Frontend

This is the frontend of the Expense Tracker application, built using React JS with Vite. The application allows users to manage their expenses, budget, and view user information. This frontend connects to a backend built with Java and Spring Boot.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Section**: Displays user information.
- **Expenses Section**: Lists all expenses with details.
- **Budget Section**: Shows budget allocations by category.
- **Single Page Application (SPA)**: Provides a seamless user experience with no page reloads.

## Technologies Used

- **React JS**: For building the user interface.
- **Vite**: For fast build and development environment.
- **Axios**: For making HTTP requests to the backend.
- **CSS**: For styling the application.

## Project Structure
expense-tracker-frontend/
├── public/
│ ├── favicon.ico
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Budget.jsx
│ │ ├── Expense.jsx
│ │ ├── User.jsx
│ │ ├── Header.jsx
│ │ └── Footer.jsx
│ ├── services/
│ │ ├── api.js
│ │ ├── budgetService.js
│ │ ├── expenseService.js
│ │ └── userService.js
│ ├── styles/
│ │ ├── App.css
│ │ └── Layout.css
│ ├── App.jsx
│ ├── main.jsx
│ └── vite.config.js
├── package.json


## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/expense-tracker-frontend.git
    cd expense-tracker-frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Ensure the backend server is running:
   - Make sure your Java Spring Boot backend server is running on `http://localhost:8080` or update the base URL in `src/services/api.js` if different.

## Running the Application

To start the development server:

```bash
npm run dev

The application will be available at http://localhost:3000.

API Endpoints
The frontend interacts with the following backend API endpoints:

User Information: GET /api/user
Expenses: GET /api/expenses
Budget: GET /api/budget
Ensure your backend API is set up to handle these routes.

Future Enhancements
Authentication: Add login and registration functionality.
Expense Categorization: Ability to categorize expenses.
Detailed Budget Reports: Visual reports and charts for budget tracking.
Responsive Design: Improve mobile and tablet responsiveness.


