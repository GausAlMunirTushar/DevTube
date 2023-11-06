import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/database.js';
const app = express();

dotenv.config({
    path: './env',
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server in running at port:${process.env.PORT}`)
        });
    })
    .catch((error) => {
        console.log(`MONGODB connection failed !!`, error);
    });
