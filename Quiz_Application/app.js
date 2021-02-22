const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const path = require('path');
app.use(express.static(path.join(__dirname, 'modules_logic_js')));

app.use(bodyParser.json());

//import Routes
const questionsRouteDB = require('./routes/questionsDB');

app.use('/questionsDB', questionsRouteDB);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/modules_logic_js/Draw.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/Draw.js');
});

app.get('/modules_logic_js/Question.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/Question.js');
});

app.get('/modules_logic_js/script.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/script.js');
});

app.get('/modules_logic_js/Answers.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/Answers.js');
});

app.get('/modules_logic_js/Result.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/Result.js');
});

app.get('/modules_logic_js/AskTheAudience.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/AskTheAudience.js');
});

app.get('/modules_logic_js/FiftyFifty.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/FiftyFifty.js');
});

app.get('/modules_logic_js/PhoneAFriend.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/PhoneAFriend.js');
});

app.get('/modules_logic_js/LifeLine.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/LifeLine.js');
});

app.get('/modules_logic_js/Reward.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/Reward.js');
});

app.get('/modules_logic_js/confetti/confetti.js', (req, res) => {
    res.sendFile(__dirname + '/modules_logic_js/confetti/confetti.js');
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {console.log('connected to DB')})

//start listening to the server
app.listen(3000);