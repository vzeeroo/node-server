require('./config/config');

const express = require('express');
const app = express();

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res) => {
    res.json('get usuario')
});

app.post('/usuario', (req, res) => { // Crear un nuevo registro
    let body = req.body;
    res.json({
        body: req.body
    })
});

app.put('/usuario', (req, res) => { // Crear un nuevo registro
    res.json('put usuario')
});

app.delete('/usuario', (req, res) => { // Crear un nuevo registro
    res.json('delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});