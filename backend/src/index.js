import dotenv from 'dotenv';
import connectDB from './config/database.js'
import express from 'express';
const app = express();

dotenv.config({
    path: './env',
});

connectDB()