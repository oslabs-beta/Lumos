const express = require('express');
const router = express.Router();

router.get('/metric', (req, res) => {
    res.status(200).send('it worked?');
})