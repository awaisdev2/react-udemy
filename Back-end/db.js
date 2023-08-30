const mongoose = require('mongoose');
const mongooseURI = 'mongodb://localhost:27017/udemy'

const connectToMongo = () => {
  mongoose.connect(mongooseURI);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
};

module.exports = connectToMongo;
