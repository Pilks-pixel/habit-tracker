const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const Habit = require('../models/habit');

router.get('/', verifyToken, async (req, res) => {
    try {
        const habits = await Habit.all;
        res.json(habits)
    } catch (err) {
        res.status(500).send({ err })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id)
        res.json(habit)
    } catch (err) {
        res.status(500).send({ err })
    }
})


module.exports = router
