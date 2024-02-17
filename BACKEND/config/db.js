const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myblogs');
        console.log(
            `Connected to Mongodb Database`.bgMagenta
                .white
        );
    } catch (error) {
        console.log(`MONGO Connect Error ${error}`.bgRed.white);
    }
};

module.exports = connectDB;