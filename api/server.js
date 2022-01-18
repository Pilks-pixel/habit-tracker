const express = require('express');
const app = express();

const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World')
});




module.exports = app;