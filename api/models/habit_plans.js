const db = require('../db_config/config');

const Habit = require('./habit');

class Habit_Plan {
    constructor(data,habit){
        this.id = data.id;
        this.beginDate =  data.begin_date;
        this.endDate =  data.end_date;
        this.frequency = data.frequency;
        //this.user = {id: data.id, path: `users/${data.user_id}`}
        this.habit = {id: data.id, path: `habits/${data.habit_id}`}
    }
    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let bookData = await db.query('SELECT * FROM books;');
                let books = bookData.rows.map(b => new Book(b));
                resolve (books);
            } catch (err) {
                reject('Book not found');
            }
        });
    };
}