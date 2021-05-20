const express = require('express');
const router = express.Router();
const Tshirt = require('../models/tshirts');

router.get('/', async (req, res) => {
    const shirts = await Tshirt.find({});
    res.render('shirts/index', {shirts});
});

router.get('/new', (req, res) => {
    res.render('shirts/new');
});

router.post('/', async (req, res) => {
    const shirts = new Tshirt(req.body.product);
    await shirts.save();
    res.redirect('/shirt');
})

router.get('/:id', async (req, res) => {
    const shirts = await Tshirt.findById(req.params.id);
    res.render('shirts/show', {shirts});
});

router.delete('/:id', async (req, res) => {
    await Tshirt.findByIdAndDelete(req.params.id);
    res.redirect('/shirt')
})

module.exports = router;