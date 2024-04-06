const express = require("express");
const { CreateQuiz, GetQuestion, SubmitAnswer } = require("../Controller/quiz");
const { CreateQuizValidation } = require("../middleware/validation/quiz");
const router = express.Router();

// Create Quiz
router.post("/create", CreateQuizValidation, CreateQuiz);

// Get Quiz Questions
router.get("/questions", GetQuestion);

// Submit Answer
router.post("/submit", SubmitAnswer);

module.exports = router;
