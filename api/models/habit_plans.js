const db = require('../db_config/config');

const Habit = require('./habit');
const User = require('./user');

class Habit_Plan {
    constructor(data,habit){
        this.id = data.id;
        this.beginDate =  data.begin_date;
        this.endDate =  data.end_date;
        this.frequency = data.frequency;
        //this.user = {id: data.id, path: `users/${data.user_id}`}
        this.habit = {id: data.id, path: `habits/${data.habit_id}`}
    }
    static get all(id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query(`SELECT habits.habit_name, habit_plans.begin_date, habit_plans.end_date, habit_plans.frequency
                                                FROM habits
                                                INNER JOIN habit_plans
                                                ON habit_plans.habit_id = habits.id
                                                WHERE habit_plans.user_id = $1;`,[id]);
                let habits = habitData.rows.map(b => new Habit_Plan(b));
                resolve (habits);
            } catch (err) {
                reject('habit not found');
            }
        });
    };

    static create(habitData){
        return new Promise (async (resolve, reject) => {
            try {
                const {user_id,habit_id,begin_date,end_date,frequency} = habitData;
                
                let user = await User.findById(user_id);
                let habit = await Habit.findById(habit_id);
                let result = await db.query(`INSERT INTO habit_plans
                    (user_id, habit_id, begin_date, end_date, frequency)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING id;`, [ user.id,habit.id,begin_date,end_date,frequency]); resolve (result.rows[0]);
                    
            } catch (err) {
                reject('habit could not be created');
            }
        });
    };

    static update(habitData){
        return new Promise (async (resolve, reject) =>{
            try{
                const {habit_id,end_date} =  habitData;
                
                let habit = await Habit.findById(habit_id);
                let result = await db.query(`UPDATE habit_plans 
                                             SET end_date = $1
                                             WHERE id = $2;` [habit.id,end_date]); resolve (result.rows[0]);
            }catch(err){
                reject('Update failed')
            }
        })
    }
}

module.exports = Habit_Plan;