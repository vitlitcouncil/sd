const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client')));

app.get('/:pass', async (req, res) => {
    res.sendFile(__dirname + '/client/');

});

app.listen(process.env.PORT || 3000);