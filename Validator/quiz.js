const joi = require("joi");

function Create(params) {
const schema = joi.object({
question: joi.string().required(),
options: joi.array().items(joi.string()).min(2).required(),
answer: joi.string().required(),
});
return schema.validate(params, { abortEarly: false });
}

module.exports = { Create };