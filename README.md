# Final Project Bootcamp Factoria F5 - Orange Digital Center

## Overview

As a final project, we had to create an interface for the Orange Digital Center where you can see all the activities and sign up.
We wanted to create an interactive and dynamic space where community members, visitors, and administrative staff can connect.
This project seeks not only to increase participation in events and activities, the interface is designed to be intuitive, user-friendly, and easy to use.

The interface is designed so that users can view all activities and sign up for an activity while administrators can create, edit and delete activities.

## Development Team

- **Andrea Sainz - Scrum Master & Fullstack Developer**

- **Cynthia Álvarez - Product Owner, Backend Developer & QA Tester**

- **Jaime Martínez - Frontend Developer**

- **Raúl Radillo - Frontend Developer**

## Stack

- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white) **React**: Used to build a dynamic and responsive user interface on the frontend. Known for its efficiency and flexibility in creating interactive interfaces.
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white) **Node.js** and ![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white) **Express**: These form the backbone of the backend, providing a robust and flexible server environment. Express, a framework for Node.js, makes it easy to create APIs and handle server requests and responses.
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) **TypeScript**: Adds static typing to JavaScript, improving code quality and reducing runtime errors.
- ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white) **MySQL**: Relational database management system used to store and manage user and activity data efficiently.
- ![React Bootstrap](https://img.shields.io/badge/-React%20Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white) **React Bootstrap**: Design framework for React, used to create a consistent and aesthetically pleasing user interface.
- ![Vite](https://img.shields.io/badge/-Vite-B73BFE?style=flat-square&logo=vite&logoColor=white) **Vite**: Modern development tool that improves build speed and offers a streamlined development environment.
- ![React Testing Library](https://img.shields.io/badge/-React%20Testing%20Library-E33332?style=flat-square&logo=react&logoColor=white) **React Testing Library**: A set of utilities to test React components, ensuring they work as expected.
- ![Jest](https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white) **Jest**: A JavaScript testing framework, used for testing the logic and functionality of applications.
- ![Supertest](https://img.shields.io/badge/-Supertest-333333?style=flat-square) **Supertest**: An assertion library for testing HTTP servers, particularly useful in conjunction with Node.js and Express.
- ![ts-jest](https://img.shields.io/badge/-ts--jest-3178C6?style=flat-square&logo=jest&logoColor=white) **ts-jest**: A TypeScript preprocessor for Jest, allowing TypeScript code to be directly tested with Jest.

## Agile Methodologies

- ![Scrum](https://img.shields.io/badge/-Scrum-5199D9?style=flat-square&logo=scrumalliance&logoColor=white) **Scrum**: A framework that helps teams work together, encouraging teams to learn through experiences, self-organize while working on a problem, and reflect on their wins and losses to continuously improve.
- ![Jira](https://img.shields.io/badge/-Jira-0052CC?style=flat-square&logo=jira&logoColor=white) **Jira**: As an agile project management tool, Jira has been crucial in organizing our workflow. It has allowed us to create and prioritize the project backlog, plan sprints, track progress with Kanban and Scrum boards, and generate reports that help us continuously improve our processes. [Visit Jira](https://raulradillo.atlassian.net/jira/software/projects/ODC/boards/3/timeline?shared=&atlOrigin=eyJpIjoiZjkzOGMxYWVlNWY3NDhhNGE2NzA9NWFExZjM0N2NlMzIiLCJwIjoiaiJ9)

## UX/UI

- ![Figma](https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white) This user interface (UX/UI) project has been created using the Figma tool, applying Atomic UX/UI principles. The iconography and typography were provided by Orange. Figma, a collaborative UI design platform, has allowed us to work together in real-time, creating interactive prototypes and high-fidelity designs. It has been instrumental in the conceptualization and rapid iteration of our design ideas, allowing us to share and receive effective feedback from stakeholders. [View UX/UI on Figma](https://www.figma.com/file/iLI0o1PSdWlBtvQXFg6f9T/Interfaz-ODC?type=UX/UI&node-id=0-1&mode=UX/UI&t=g3He0cjBmNJbupDO-0).

## Version Control

- ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white) **GitHub**: A code hosting platform that uses Git. It has provided us with a central space to store our repositories, review code through pull requests, manage tasks, and document our progress. GitHub Actions for Continuous Integration/Continuous Delivery (CI/CD) has also played a vital role in automating our testing and deployment pipelines. [Visit Our GitHub Repository](https://github.com/andsainz/OrangeDigitalCenter.git)

## Website Navigation and Functionality Diagram

[View the User Flowchart Diagram](https://whimsical.com/website-navigation-and-functionality-overview-orange-digital-cen-BN6tUfuAWeEVtQMGF86CEY)

### Frontend Scripts

`````bash
npm run dev      # Starts the Vite development server for a live development environment
npm run start    # Starts the Vite server for production
npm run test     # Runs tests with Vitest, ensuring code reliability and function
`````

## Backend Development

The backend of the project is developed in Node.js, using Express and TypeScript.

### Dependencies

- **bcrypt**: For secure password hashing.
- **cookie-parser**: Middleware for parsing cookies in HTTP requests.
- **cors**: To set up CORS policy in the Express application.
- **dotenv**: For managing environment variables.
- **express**: As a web framework for Node.js.
- **express-session**: For managing sessions in Express.
- **jsonwebtoken**: To implement JSON Web Tokens.
- **mysql2**: As a MySQL client for Node.js.
- **sequelize**: ORM for Node.js, facilitating SQL database interactions.
- **tslint**: For static analysis and improving TypeScript code quality.
- **uuidv4**: For generating universally unique identifiers (UUIDs).

### DevDependencies

These are used to enhance the development process and TypeScript integration:

- **@types/bcrypt**, **@types/cookie-parser**, **@types/cors**, **@types/express**, **@types/express-session**, **@types/jsonwebtoken**: Provide TypeScript types for respective libraries.
- **ts-node-dev**: Automatically restarts the server during development when TypeScript file changes are detected.
- **typescript**: The primary programming language used in the backend development.

### Backend Scripts

````bash
npm run dev      # Uses nodemon to run index.js, automatically restarting the server on file changes
npm run test     # Default script for tests, to be modified according to implemented tests
````

### Cloning the Repository

1. Clone the repository to your local machine:

````bash
 git clone https://github.com/andsainz/OrangeDigitalCenter.git
````

### Backend Setup

1. Navigate to the backend directory from the root of your project folder:

````bash
 cd backend
````

2. Install the necessary npm packages:

````bash
npm install
````

3. Create a .env file in the backend directory and fill it with the necessary environment variables.

4. Start the backend server:

````bash
npm run dev
````

This will start the Node.js server typically on port 3000.

### Frontend Setup

To get the frontend running:

1. Open a new terminal and navigate to the frontend directory:

````bash
cd frontend
````

2. Install the necessary npm packages:

````bash
npm install
````
3. Start the frontend development server:

````bash
npm run dev
````
By default, this will launch on http://localhost:5173.

### Running Tests

We have tested with React Testing Library in frontend and Jest and Supertest in backend.
To run tests, use the following command in both frontend and backend directories:

````bash
npm run test
````

## License

The Orange Digital Center project is distributed under the following license:

### ISC License (Internet Systems Consortium)

The project is licensed under the ISC License, a very permissive and open source free software license comparable to the MIT license. The ISC License permits the use, copying, modification, and distribution of the software, both in source code and compiled forms, with or without modifications, free of charge or commercially.

### License Summary

- **Permission to Use, Copy, Modify, and Distribute**: Commercial and private use, modification, distribution, and sublicensing of the software is permitted.
- **No Warranty**: The software is provided "as is" without warranty of any kind.
- **Keep Copyright Notice**: You must include the original copyright notice and this permission on any copy of the software.

This project has been done by F5 coders and Orange Digital Center as a customer.

### Thank you all
