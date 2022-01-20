const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const Habit_Facts = require('../models/habit_Facts');

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const habitFacts = await Habit_Facts.findById(req.body.habit_id, req.query.date)
        res.json(habitFacts)
    } catch (err) {
        res.status(500).send({ err })
    }
})

router.post('/', verifyToken, async (req,res) => {
    try {
        const habitFact = await Habit_Facts.create(req.body.habit_id);
        console.log(habitFact);
        res.status(201).json(habitFact)
    } catch (err) {
        res.status(422).json({err})
    }
} )



module.exports = router