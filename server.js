const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const { v4: uuidV4 } = require('uuid')
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
const { cp } = require('fs')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home')
})
app.post('/submit', (req, res) => {
//NEED TO REDIRECT
})