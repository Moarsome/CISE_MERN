const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log('MongoDB couldn\'t be connected...');
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;