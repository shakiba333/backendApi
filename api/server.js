require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/post.js');
const cors = require('cors');
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
// const passportSetup = require("./passport");
const port = process.env.PORT || "8080";



require('./passport.js')
mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});

app.use(
    cookieSession({
        name: 'session',
        keys: ["mysecret"],
        maxAge: 24 * 60 * 60 * 1000,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

const apiRouter = require('../api/routes/api');
app.use('/auth', authRoute);
app.use('/api', apiRouter);
app.listen(port, () => {
    console.log('listening...');
});

