DROP TABLE IF EXISTS habits_plan;

CREATE TABLE habits_plans (
    id serial PRIMARY KEY,
    user_id INT,
    habit_id INT,
    begin_date DATE,
    end_date DATE,
    frequency VARCHAR(50)
    );
