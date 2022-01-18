const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const Habit_Plan = require('../models/habit_plans');

router.get('/', async (req, res) => {
    try {
        const habitPlan = await Habit_Plan.all
        res.json(habitPlan)
    } catch (err) {
        res.status(500).send({ err })
    }
})

router.post('/', async (req,res) => {
    try {
        const habitPlan = await Habit_Plan.create(req.body);
        res.status(201).json(habitPlan)
    } catch (err) {
        res.status(422).json({err})
    }
} )

router.patch('/', async (req,res) => {
    try {
        const habitPlan = await Habit_Plan.update(req.body);
        res.status(201).json(habitPlan)
    } catch (err) {
        res.status(422).json({err})
    }
} )


module.exports = router