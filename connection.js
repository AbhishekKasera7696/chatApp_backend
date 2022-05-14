// const mongoose = require("mongoose");
// require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.z2g95.mongodb.net/chatApp?retryWrites=true&w=majority`, () => {
//     console.log("connected to mongodb")
// })




const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://chatmyapp2:cf5DxD0yCryH9BQl@cluster0.60zdu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
    console.log("Connected to mongoDB");
});




