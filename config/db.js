const mongoose = require('mongoose');
const config = require('./config');
const colors = require('colors');

const connectDB = async () => {
  const dbURL = config.db.url;
  try {
    await mongoose.connect(dbURL, {
      dbName: 'SCHOOL-MANAGEMENT-SYSTEM',
    });
    console.log(`Database Connected Successfully...`.bgMagenta);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
