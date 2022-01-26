import express, { json } from 'express';
import mongoose from 'mongoose';
const {connect} = mongoose;
import cookieParser from 'cookie-parser';
import dotenv  from "dotenv";
import postRoute from './routes/postRoute.js';
import authRoute from './routes/authRoute.js';
import contactRoute from './routes/contactRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import profileRoute from './routes/profileRoute.js';
import commentRoute from './routes/commentRoute.js';
import serviceRoute from './routes/serviceRoute.js';
import projectRoute from './routes/projectRoute.js';

// import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} from './middlewares/verifyToken.js';
// add this line below the other import statements
import helmet from 'helmet'

import compression from 'compression'

dotenv.config()

const app = express()
app.use(json());
app.use(cookieParser());
app.use(helmet());
// add this below app.use(helmet())
app.use(compression()); //Compress all routes
// dotenv.config()

// connect('mongodb://localhost/capstone2')
//     .then(() => console.log('Connected to mongoDB'))
//     .catch(err => console.error('Could not connect to MongoDBNamespace...', err));
// // Set up mongoose connection

const uri = String(process.env.MONGO_URL)
connect(uri, {   
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log("Connected to MongoDB")).
catch((err) => console.log(err));

app.listen(process.env.PORT || 3000)



//All Routers
app.use('/api/posts',postRoute);
app.use('/api/messages', contactRoute);
app.use('/api/profile',profileRoute);
app.use('/api/comments', commentRoute);
app.use('/api/projects', projectRoute);
app.use('/api/services', serviceRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/user', authRoute);