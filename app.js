const express = require('express');
const app = express();
const string_square = require ('./square');
const bodyParser = require('body-parser');

app.use( bodyParser.json() );

app.get('/', (req, res) => res.send('Hello World!'));

let result;

app.get('/square', (req, res) => {

    let parola = req.query.string;
    result = string_square(parola);


    res.status(200).json(result);
});

module.exports = app;