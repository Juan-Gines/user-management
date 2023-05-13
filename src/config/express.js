import userRouter from '#Routes/user.routes.js';
import express, { json } from 'express';

const expressApp = express();

// Middlewares
expressApp.use(json());

// Routes
expressApp.use('/user', userRouter);

export default expressApp;