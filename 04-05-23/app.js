const express = require('express');
const data = require('./data');

const app = express();



app.get('/users', (req, res) => {
    res.json(data);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = data.find((user) => user.id === Number(id));
    if (!user) {
        return res.json({msg: 'user not found'});
    }
    return res.json({user});
});




app.listen(8000, () => console.log('Server Listening....'));