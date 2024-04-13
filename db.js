const mongoose = require('mongoose');
const mongooseURI = "mongodb://127.0.0.1:27017/inotebook";

const connectToMongoose = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongooseURI);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

module.exports = connectToMongoose;