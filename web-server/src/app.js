const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Hello express!</h1>');
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Linda'
    },{
        name: 'Santi'
    }]);
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>');
})

app.get('/weater', (req, res) => {
    res.send({
        forescast: 'It is snowing',
        location: 'Philadelphia'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})

