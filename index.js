const express = require("express");
const app = express();
const connectDB = require("./Config/db");
const logger = require("./Utils/pino");
const quiz = require("./routes/quiz");
const cors = require("cors");

//===========Connect MongoDb==============//
(async () => {
  await connectDB();
})();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Enable CORS
app.use(cors());

//===============Quiz Routes==================//
app.use("/api/quiz", quiz);

//=====================Error Handling Middleware========================//
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Express server is running on ${port}`);
});
