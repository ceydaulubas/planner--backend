const mongoose = require('mongoose');
require('dotenv/config');

const DB_CONNECTION = process.env.DB_CONNECTION,
  options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

// Function to run database connection
const connectDatabase = () =>
  mongoose
    .connect(DB_CONNECTION, options)
    .then((x) => {
      console.log(`Connected to MongoDB!`);
    })
    .catch((err) => {
      console.error(err.message);
    });

module.exports.connectDatabase = connectDatabase;
