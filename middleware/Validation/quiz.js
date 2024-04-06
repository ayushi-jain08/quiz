const { Create } = require("../../Validator/quiz");

function validationMiddleware(validationFunction) {
return (req, res, next) => {
const { value, error } = validationFunction(req.body);
if (error) {
const errorMessages = error.details.map((detail) => detail.message);
return res.status(400).json({ success: false, messages: errorMessages });
}
req.body = value;
next();
};
}

const CreateQuizValidation = validationMiddleware(Create);

module.exports = { CreateQuizValidation };