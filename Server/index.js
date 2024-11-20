require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const mainRouter = require('./Router');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});