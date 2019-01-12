const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use( bodyParser.json() );


app.listen(PORT, () => console.log('Example app listening on port '+ PORT));

app.get('/', (req, res) => res.send('Hello World!'));
let result;

function string_square(s){
    
 if (isNaN(s)){
    return s.length*s.length;

 }else return -1;
};

app.get('/square', (req, res) => {

    let parola = req.query.string;
    result = string_square(parola);


    res.status(200).json(result);
    });