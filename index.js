import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
