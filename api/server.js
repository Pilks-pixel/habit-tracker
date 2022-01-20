const express = require('express');
const app = express();



const cors = require('cors');

app.use(cors('*'));
app.use(express.json());

const authRoutes = require('./controllers/auth');
const userRoutes = require('./controllers/users');
const habitRoutes = require('./controllers/habits')
const habitPlansRoutes = require('./controllers/habit_plan')
const habitFactsRoutes = require('./controllers/habit_fact')

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/habits', habitRoutes);
app.use('/habitplans', habitPlansRoutes);
app.use('/habitfacts', habitFactsRoutes);


app.get('/', (req, res) => res.json({ message: 'Welcome' }));


module.exports = app;