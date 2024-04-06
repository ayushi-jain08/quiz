const response = (res, statusCode, messageOrData, data = null) => {
// Define the response object
let responseObject = {
status: statusCode
};
// Check if the second parameter is a message or data
if (typeof messageOrData === 'string') {
responseObject.message = messageOrData;
if (data !== null) {
responseObject.data = data;
}
} else {
responseObject.data = messageOrData;
}

// Set the status code and send the response
res.status(statusCode).json(responseObject);
};

module.exports = {response};