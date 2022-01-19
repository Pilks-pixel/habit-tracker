const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const Habit_Facts = require('../models/habit_Facts');

router.get('/:id', async (req, res) => {
    try {
        const habitFacts = await Habit_Facts.findById(req.params.id,req.body)
        res.json(habitFacts)
    } catch (err) {
        res.status(500).send({ err })
    }
})

router.post('/', async (req,res) => {
    try {
        const habitFacts = await Habit_Facts.create(req.body);
        res.status(201).json(habitFacts)
    } catch (err) {
        res.status(422).json({err})
    }
} )



module.exports = router