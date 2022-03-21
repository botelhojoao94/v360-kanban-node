require('dotenv').config()
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const itemRouter = require('./Router/itemRouter')
const listRouter = require('./Router/listRouter')
const port = process.env.PORT || 3000;

api.use(cors());

api.use(bodyparser.urlencoded({
    extended: true
}));

api.use(bodyparser.json());

api.get('/', (req, res) => {
    res.send('API Running!')
})

// -------------- ROUTES --------------
api.use('/data', itemRouter, listRouter);


// -------------- LISTEN -------------
api.listen(port, () => {
    console.log(`Running API on port ${port}`)
})