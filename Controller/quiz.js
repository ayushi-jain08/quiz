const Question = require("../Model/Quiz");
const logger = require("../Utils/pino");
const statuscode = require("../helper/statuscode");
const message = require("../helper/message");
const { response } = require("../helper/response");
const errorHandler = require("../Utils/ErrorHandler");

// Create Quiz Question
const CreateQuiz = async (req, res, next) => {
try {
const { question, options, answer } = req.body;
const newQuestion = new Question({ question, options, answer });
await newQuestion.save();

response(res, statuscode.created_code, message.create);
} catch (error) {
logger.error("Error inserting question:", error);
next(error);
}
};

// Get All Questions
const GetQuestion = async (req, res, next) => {
try {
const questions = await Question.find({});
response(res, statuscode.success_code, questions);
} catch (error) {
logger.error("Error getting question:", error);
next(error);
}
};

const SubmitAnswer = async (req, res, next) => {
try {
const userAnswers = req.body.answers;
// Fetch questions from the database based on the question IDs provided by the user
const questionIds = userAnswers.map((answer) => answer.questionId);
const questions = await Question.find({ _id: { $in: questionIds } });

// Calculate score and provide feedback
const feedback = userAnswers.map((answer) => {
const question = questions.find(
(q) => q._id.toString() === answer.questionId
);
if (!question) {
logger.error(`Question with ID ${answer.questionId} not found`);
return next(
errorHandler(
statuscode.not_found_error,
`Question with ID ${answer.questionId} not found`
)
);
}
const isCorrect = question.answer === answer.optionLabel;
return {
question: question.question,
userAnswer: answer.optionLabel,
correctAnswer: question.answer,
isCorrect,
};
});

// Calculate total score
const totalScore = feedback.reduce(
(score, item) => score + (item.isCorrect ? 1 : 0),
0
);
logger.info(`Quiz submitted successfully by user`);
res.json({ score: totalScore, feedback });
} catch (error) {
logger.error(error);
next(error);
}
};

module.exports = { CreateQuiz, GetQuestion, SubmitAnswer };