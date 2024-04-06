# Node.js Quiz

This is a simple quiz application built using Node.js that tests users' knowledge of Node.js concepts.

## Features

- Implements an Express.js server for handling HTTP requests.
- Provides a set of multiple-choice questions related to Node.js concepts.
- Allows users to submit their answers to the quiz.
- Calculates and displays the user's score based on the correctness of their answers.
- Includes feedback to users on their answers (correct/incorrect) along with the correct answer for each question.
- Ensures user-friendliness and provides clear instructions.

## Requirements

- Node.js installed on your machine
- MongoDB installed on your machine (if using a MongoDB database)
- Postman (or any API testing tool) for testing the API endpoints
- A web browser to access the quiz interface

## Getting Started

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/ayushi-jain08/quiz.git
```

2. Install dependencies:

```bash
  npm install
```

3. Set up environment variables:
   **Create a .env file in the root directory with the following variables:**

```bash
   PORT=7070
```

5. Start the backend server:

   ```bash
   npm run dev
   ```

   `OR`

   ```bash
   node ./index.js
   ```

   The server will start at `http://localhost:7070`.

## Folder Structure

### Backend

```
.
├── controllers
│   ├── quiz.js             # Logic of quiz controllers
│
├── routes
│   ├── quiz.js             # Logic of quiz routes
│
├── utils
│   ├── ErrorHandler.js            #  logic to deal with errors
│   ├── pino.js             # pino logic to save and logger and maintains the records of all logs
│   ├── mongodb.js          # Mongodb database connection logic
│
├── middleware
│   └── validation–——validation.js  #validate the quiz creation
│
├── .config.js——db.js           # mongodb connection code
│
├── .server.js              # logics of express server and assemble all module to cuppling with each other
|
├── .env                    # Contains confidential keys
├── .gitignore              # Git logic to ignore files
├── package.json            # Contains all the packages information
└── README.md               # Documentation of code
```
