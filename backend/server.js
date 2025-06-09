import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import "mongodb";
import bcrypt from 'bcrypt';
// import connectDB from './database.js';
import {MongoClient} from "mongodb";
// import User from './database-tables/User.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from "connect-mongo"

// load env
dotenv.config({path: '../.env'});

// Express app and server setup
const app = express();
const router = express.Router();
const server = createServer(app);

const port = process.env.PORT || 5000;

const session_secret = crypto.randomBytes(64).toString('hex');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: session_secret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://mongo:27017/trading-sim'
    }),
    cookie: {
        maxAge: 60*60*60*1000,
        httpOnly: true
    }
}));
app.use('/', router);

console.log("Server Running");

// Start server with better error handling
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Handle server errors
server.on('error', (error) => {
    console.error('Server error:', error);
});


// database connect
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/trading-sim';
const client = new MongoClient(MONGO_URI);

await client.connect();
console.log('MongoDB Connected');


// Get database and collections (just like Python)
const db = client.db("trading-sim");
const userCollection = db.collection("users");
const portfolioCollection = db.collection("portfolios");
const tradeCollection = db.collection("trades");


// sign up
router.post('/signup', async (req, res) => {
    try {
        const {name, email, password, confirmPassword} = req.body;
        console.log("Endpoint for signup hit");
        console.log({name, email, password, confirmPassword});

        if (password !== confirmPassword) {
            return res.status(400).json({
                error: 'Passwords do not match.'
            });
        }

        let emailCheck = (await userCollection.find({}).toArray()).length;
        if (emailCheck > 0) {
            return res.status(400).json({
                error: 'Email already exists.'
            })
        }

        // creat new user and store email name password into database
        const hash = await bcrypt.hash(password, 12);

        const newInsert = {
            name: name,
            email: email,
            password: hash,
            lastLogin: null
        }

        await userCollection.insertOne({
            ...newInsert
        });
        const documents = await userCollection.find({}).toArray();
        console.log(documents);

        // create new profolio for the user as well


        res.status(201)

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
})

router.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log("Endpoint for login hit");
        console.log({email, password});

        const checkPassword = await bcrypt.hash(password, 12)
        const user = await userCollection.findOne({email: email});
        if (!user) {
            res.status(401).json({
                error: 'Invalid credentials.'
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                error: 'Invalid credentials.'
            })
        }

        req.session.userId = user._id;
        req.session.email = user.email;
        req.session.fullName = user.name;

        await userCollection.updateOne({_id: user._id}, {
            $set: {lastLogin: new Date()}
        });

        res.status(201).json({
            message: 'SignIn successfully.',
            user: {
                id: user._id,
                email: user.email,
                name: user.name
            }
        })

    } catch (error) {
        console.error('SignIn error:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
})


export default app;