const mongoose = require("mongoose");

const connectDb = async() => {
    await mongoose.connect("mongodb+srv://dbUser:Password%40123@nodeproject.tgx5xwv.mongodb.net/connectplus")
}

module.exports = connectDb;