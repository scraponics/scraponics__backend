import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


import AuthRoute from './Routes/AuthRoute.js';
import RateRoute from './Routes/RateRoute.js';


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


dotenv.config();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => 
    app.listen(process.env.PORT, () => 
        console.log(`Listening at ${process.env.PORT}`)
    )
).catch((error) =>
    console.log(error)
)

// Usage of Routes
app.use('/auth', AuthRoute);
app.use('/rate', RateRoute);