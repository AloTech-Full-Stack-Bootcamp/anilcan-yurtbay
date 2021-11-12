const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');

// Express Start
const app = express();

// DB Connection
mongoose.connect(`mongodb://localhost/smartedu-db`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Success")
}).catch((err)=>{
    console.log(err)
})

// Template Engine
app.set('view engine','ejs');

// Global Variables
global.userIN = null;

// Middlewares

app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: "my_edu_secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' })
}));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.flashMessages = req.flash();
    next();
});

// Routes
app.use("*", (req,res,next)=>{
    userIN = req.session.userID;
    next();
})

app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users",userRoute);

// Server start
const port = 5000;
app.listen(port,()=>{
    console.log(`Uygulama ${port} portunda başlatıldı. (http://127.0.0.1:${port})`)
})