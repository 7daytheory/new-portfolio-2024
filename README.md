# New Portfolio 2025

This project is a personal portfolio website built using React, Vite, and Tailwind CSS. It showcases various sections like the banner, projects, experience, contact form, and more. The project is designed to be responsive and includes features like animations, form submissions, and toast notifications.

## Table of Contents
- [New Portfolio 2025](#new-portfolio-2025)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
  - [Contributing](#contributing)
  - [Setting up Node Server](#setting-up-node-server)
    - [Install Node](#install-node)
    - [Install PM2](#install-pm2)
    - [Set up application to auto-start](#set-up-application-to-auto-start)

## Demo
Check out the live site at [matthewjlowe.com](https://matthewjlowe.com)

## Features
- Responsive layout across different screen sizes
- Animated transitions and reveals
- Form submission with email notifications using EmailJS
- Toast notifications for user feedback
- Vertical timeline for experience section
- Lottie animations for enhanced visuals
- Modern styling with Tailwind CSS
- Environment configuration using dotenv

## Built With
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [FontAwesome](https://fontawesome.com/) - Icons and social logos
- [EmailJS](https://www.emailjs.com/) - Send emails using client-side technology
- [React Router](https://reactrouter.com/) - Declarative routing for React

## Getting Started
To get a local copy up and running, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/new-portfolio-2025.git

2. Navigate to repository:
   ```bash
   cd new-portfolio-2025

3. Install dependencies:
   ```bash
   npm install
   ```

    ## Running The Project
    ### To Start Dev Server, run:
    ```bash
    npm run dev
    ```

    Open http://localhost:5173 to view the project in your browser.

    ## Running The Project
    ### To create a build , run:
    ```bash
    npm run build
    ```

    ## Running The Project
    ### To Preview the production build locally, run:
    ```bash
    npm run preview


## Scripts
- `dev`: Starts the Vite development server
- `build`: Builds the project for production
- `lint`: Lints the project files using ESLint
- `preview`: Serves the production build for preview
- `build:css`: Compiles Tailwind CSS to the output file

## Dependencies
- **@emotion/react**: For CSS-in-JS styling
- **@fortawesome/fontawesome-svg-core**: Core package for FontAwesome
- **@fortawesome/free-solid-svg-icons**: Free solid icons from FontAwesome
- **@fortawesome/react-fontawesome**: FontAwesome components for React
- **autoprefixer**: Adds vendor prefixes to CSS
- **dotenv**: Loads environment variables
- **emailjs-com**: Send emails from the client-side
- **postcss**: Tool for transforming CSS
- **react**: JavaScript library for building user interfaces
- **react-awesome-reveal**: Animation library for React components
- **react-dom**: React package for working with the DOM
- **react-lottie**: Lottie animation for React
- **react-router-dom**: Routing library for React
- **react-toastify**: Notification library for React
- **react-vertical-timeline-component**: Component for vertical timelines
- **tailwindcss**: Utility-first CSS framework

## Dev Dependencies
- **@eslint/js**: ESLint library for JavaScript
- **@types/react**: TypeScript types for React
- **@types/react-dom**: TypeScript types for React DOM
- **@vitejs/plugin-react**: Official React plugin for Vite
- **eslint**: Linter for JavaScript and JSX
- **eslint-plugin-react**: ESLint rules for React
- **eslint-plugin-react-hooks**: ESLint rules for React Hooks
- **eslint-plugin-react-refresh**: ESLint plugin for React Fast Refresh
- **globals**: Library that provides globally available variables
- **vite**: Next Generation Frontend Tooling

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Setting up Node Server

Install NVM (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

<p>After running the installation script, you should close and reopen your terminal, or you can run the following command to use NVM immediately:</p>
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion

### Install Node
```bash
nvm install node  # installs latest Node.js version
nvm use node      # use installed node

<p>You can verify if this worked by checking version with -v (node -v or nvm -v)</p>

### Install PM2 
<p>With Node.js and npm installed, you can now install PM2, which is used to manage and keep your Node.js applications running - you can just use node but PM2 has many helpful features:</p>
```bash
npm install pm2@latest -g  # Installs PM2 globally

<p>Start the application with PM2</p>
```bash
pm2 start index.js --name "app name"  # I used index.js but it might be server.js or app.js - and insert your app name from package

### Set up application to auto-start
```bash
pm2 startup  # Run as superuser

```bash
pm2 save # Savecurrent list of processes



