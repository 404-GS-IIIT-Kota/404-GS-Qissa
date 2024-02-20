import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js'
import errorMiddleware from './middlewares/error.middleware.js';
import cors from 'cors';
config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Cors Middleware
app.use(
    cors({
        origin: '*',
        credentials: true
    }));

// Cookie Parser Middleware 
app.use(cookieParser());

app.use(morgan('dev'));

// Server Status Check Route
app.use('/ping', function (req, res) {
    res.send('Pong');
});

app.use('/api/v1/user', userRoutes)

app.all('*', (req, res) => {
    res.status(404).send('OOPS!! 404 page not found');
});

app.use(errorMiddleware);

export default app; 