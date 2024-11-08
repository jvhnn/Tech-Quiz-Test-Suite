# Tech Quiz Application

## Table of Contents
- [Project Description](#project-description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
  - [Component Tests](#component-tests)
  - [End-to-End Tests](#end-to-end-tests)
- [Walkthrough Video](#walkthrough-video)

## Project Description
The **Tech Quiz Application** is a full-stack quiz platform built with the MERN stack (MongoDB, Express, React, Node.js), designed to help users test and improve their tech knowledge. Featuring a dynamic user interface and back-end data handling, this application presents a random set of questions each session, displays the final score, and allows users to restart the quiz.

## User Story
As an aspiring developer,  
I want to take a tech quiz  
So that I can test my knowledge and improve my skills.

## Acceptance Criteria
- **Start the Quiz:** Begin the quiz when the user clicks "Start," displaying the first question.
- **Answer Questions:** Users can answer each question and proceed to the next.
- **Display Score:** Upon completion, display the user’s final score.
- **Restart Quiz:** Allow users to restart after viewing their score.

## Features
- **Randomized Questions:** New set of random questions fetched from MongoDB for each quiz session.
- **Interactive UI:** Smooth user experience, allowing easy navigation through questions.
- **Score Display:** Calculates and shows the score upon quiz completion.
- **Data Persistence:** Manages questions with MongoDB for reliable data handling.
- **Testing with Cypress:** Comprehensive testing ensures functionality and user satisfaction.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jvhnn/Tech-Quiz-Test-Suite.git
   cd Tech-Quiz-Test-Suite
   ```

2. **Install Dependencies:**
   - In the server directory:
     ```bash
     cd server
     npm install
     ```
   - In the client directory:
     ```bash
     cd ../client
     npm install
     ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the server directory using `.env.EXAMPLE` as a guide.
   - Set `MONGODB_URI` to your MongoDB connection string (e.g., `mongodb://127.0.0.1:27017/techquiz`).

4. **Seed the Database:**
   - Populate the database with sample questions:
     ```bash
     cd ../server
     npm run seed
     ```

## Usage

1. **Start the Backend Server:**
   ```bash
   npm run start
   ```

2. **Start the Frontend Development Server:**
   - In the client directory:
     ```bash
     npm run dev
     ```
   - Access the application at [http://localhost:3001](http://localhost:3001).

## Testing

The application uses **Cypress** for thorough testing, including both component and end-to-end tests.

### Component Tests
- **Quiz Component:** Verifies the quiz start, question display, and final score functionality.

### End-to-End Tests
- **Complete Quiz Flow:** Simulates a full quiz experience from start to final score.
- **Data Fetching:** Mocks API calls to `/api/questions/random` for reliable test conditions.

To run tests:
```bash
npx cypress open
```

Run all tests directly from the Cypress UI.

## Walkthrough Video
[Link to walkthrough video]