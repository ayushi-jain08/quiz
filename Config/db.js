const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("../Utils/pino");
dotenv.config();

const connectDB = async () => {
try {
const connect = await mongoose.connect(process.env.MONGO_URL);
logger.info(`MongoDB connected successfully`);
} catch (error) {
logger.error(`Error in MongoDB connection: ${error}`);
}
};

module.exports = connectDB;