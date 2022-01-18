const db = require('../db_config/config');


class Habit {
    constructor(data){
        this.id = data.id;
        this.habitName = data.habit_name;
    };


    static get all(){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.query(`SELECT * FROM habits;`);
                let habits = result.rows.map(r => new Habit(r))
                res(habits)
            } catch (err) {
                rej(`Error retrieving users: ${err}`)
            }
        })
    }

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query('SELECT * FROM habits WHERE id = $1;', [ id ]);
                let habit = new Habit(habitData.rows[0]);
                resolve(habit);
            } catch (err) {
                reject('habit not found');
            };
        });
    };

    static create(name){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query('INSERT INTO habits (name) VALUES ($1) RETURNING *;', [ name ]);
                let habit = new Habit(habitData.rows[0]);
                resolve (habit);
            } catch (err) {
                reject('habit could not be created');
            };
        });
    };

    // static findOrCreateByName(name){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let habit;
    //             const habitData = await db.query('SELECT * FROM habits WHERE name = $1;', [ name ]);
    //             if(!habitData.rows.length) {
    //                 habit = await Habit.create(name);
    //             } else {
    //                 habit = new Habit(habitData.rows[0]);
    //             };
    //             resolve(habit);
    //         } catch (err) {
    //             reject(err);
    //         };
    //     });
    // };
}

module.exports = Habit;