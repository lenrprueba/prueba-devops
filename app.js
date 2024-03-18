const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const web1 = require('./routes/web1');
const web2 = require('./routes/web2');

app.use('/web1', web1);
app.use('/web2', web2);

app.use('/*', (req, res) => {
    res.status(404).json({
        message: 'Incorrect route or params',
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/shop')
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err))


app.use(express.json());


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})
module.exports = app;