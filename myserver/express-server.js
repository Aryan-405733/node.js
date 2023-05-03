const express = require('express');

const app = express();

app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.send('This is Express Server!!!');
});

app.get('/about', (req,res) => {
    res.send('hey!!!');
});

app.listen(8000, () => console.log('Server Listening....'));
