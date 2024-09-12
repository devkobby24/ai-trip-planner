# Full-stack AI Trip Planner

This project is a Full-stack AI-powered Trip Planner application built using React, Gemini AI, Firebase, and TailwindCSS. It allows users to plan trips with personalized recommendations powered by AI, manage user authentication and data using Firebase, and enjoy a responsive and modern UI with TailwindCSS.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)


## Features

- **AI-Powered Trip Planning**: Leverage Gemini AI for personalized travel recommendations.
- **User Authentication**: Secure user login and registration using Firebase Authentication.
- **Real-Time Database**: Store and retrieve user data with Firebase Firestore.
- **Responsive Design**: TailwindCSS ensures a seamless experience across all devices.
- **Modern UI**: Clean and customizable design with TailwindCSS.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) with [TailwindCSS](https://tailwindcss.com/)
- **AI**: [Gemini AI](https://gemini.openai.com/) for AI-driven features
- **Backend**: [Firebase Authentication](https://firebase.google.com/products/auth), [Firebase Firestore](https://firebase.google.com/products/firestore)
- **Hosting**: [Firebase Hosting](https://firebase.google.com/products/hosting)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed.
- **Firebase Account**: Set up a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- **Gemini AI API Key**: Obtain your API key from the [Gemini AI website](https://gemini.openai.com/).

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/devkobby24/tripplanner.git
   cd tripplanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Firebase**
   - Create a Firebase project in the Firebase Console.
   - Enable Authentication and Firestore Database.
   - Get your Firebase config object and create a `.env` file in the root directory:
     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. **Setup Gemini AI**
   - Add your Gemini AI API key to the `.env` file:
     ```plaintext
     REACT_APP_GEMINI_API_KEY=your-gemini-api-key
     ```

5. **Run the app**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

Once the app is running:

1. **Sign Up/Login**: Create an account or log in with existing credentials.
2. **Plan a Trip**: Use the AI-powered trip planner to get recommendations.
3. **Save Your Trips**: Store and manage your planned trips in your personal dashboard.
4. **Explore Recommendations**: Get personalized travel recommendations based on your preferences.

## Project Structure

```plaintext
ai-trip-planner/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages (Home, Login, Dashboard, etc.)
│   ├── services/        # Firebase and Gemini AI services
│   ├── styles/          # TailwindCSS custom styles
│   ├── App.js           # Main App component
│   ├── index.js         # Entry point of the application
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
