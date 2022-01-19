const db = require('../db_config/config');


const Habit_Plan = require('./habit_plans');

class Habit_Facts{
    constructor(data, habitPlan){
        this.id=data.id;
        this.hfactTimestamp=data.hfact_timestamp;
        this.hPlanId={id: data.id, path: `habitplans}`}
    }

    static findByID(hPlanId,hfact_timestamp){
        return new Promise (async (resolve, reject) => {
            try{
            let count = await db.query(`SELECT count(*) FROM habit_facts WHERE hplan_id = $1 AND DATE(hfact_timestamp) = $2;`[hPlanId, hfact_timestamp]); resolve(count);
        }catch (err) {
            reject('habit not found');
        }
    });   
    }

    static create(hplan_id){
        return new Promise (async (resolve, reject) =>{
            try{
                let habitplans = await Habit_Plan.findById(hplan_id);
                let result = await db.query(`INSERT INTO habit_facts(hplan_id,hfact_timestamp) VALUES ($1,CURRENT_TIMESTAMP);`,[habitplans.id]); resolve (result.rows[0]);
            } catch (err) {
              reject('timestamp could not be created');
            }
        })
    }
}


module.exports = Habit_Facts;