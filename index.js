import express, { json } from 'express';
import mongoose from 'mongoose';
const {connect} = mongoose
import cookieParser from 'cookie-parser'

import postRoute from './routes/postRoute.js';
import authRoute from './routes/authRoute.js';
import contactRoute from './routes/contactRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import profileRoute from './routes/profileRoute.js';
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} from './middlewares/verifyToken.js';



const app = express()
app.use(json());
app.use(cookieParser());
// dotenv.config()

connect('mongodb://localhost/capstone2')
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.error('Could not connect to MongoDBNamespace...', err));

app.listen(5000, () => console.log("Listening on port 3000..."))


//All Routers
app.use('/api/posts',postRoute);
app.use('/api/messages', contactRoute);
app.use('/api/profile',profileRoute);
app.use('/api/categories', categoryRoute);
app.use('/api', authRoute);