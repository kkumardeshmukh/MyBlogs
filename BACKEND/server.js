const express = require('express')
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db');

// configuration of dotenv 
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;


const userRouter = require("./routes/userRouter");
const blogRouter = require("./routes/blogRouter");


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.use('/api/v1/user', userRouter)
app.use('/api/v1/blog', blogRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`.bgWhite.black);
});