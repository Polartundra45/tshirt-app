const express = require('express');
const router = express.Router();
const Tshirt = require('../models/tshirts');

router.get('/', (req, res) => {
    res.send('it works')
})

module.exports = router;