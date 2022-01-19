const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const Habit_Plan = require('../models/habit_plans');

router.get('/', verifyToken, async (req, res) => {
    try {
        // ginger add parameter req.user 
        const habitPlan = await Habit_Plan.all(req.user)
        res.json(habitPlan)
    } catch (err) {
        res.status(500).send({ err })
    }
})

router.post('/', verifyToken, async (req,res) => {
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