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
// add this line below the other import statements
import helmet from 'helmet'

import compression from 'compression'



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
// Set up mongoose connection

let dev_db_url = 'mongodb+srv://Cryptotearer:fabien123@andela.pqdar.mongodb.net/capstone?retryWrites=true&w=majority'
connect(process.env.MONGO_URL || dev_db_url , {   
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
}).then(console.log("Connected to MongoDB")).
catch((err) => console.log(err));

app.listen(process.env.PORT || 3000)



//All Routers
app.use('/api/posts',postRoute);
app.use('/api/messages', contactRoute);
app.use('/api/profile',profileRoute);
app.use('/api/categories', categoryRoute);
app.use('/api', authRoute);