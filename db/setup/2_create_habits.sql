DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    habit_id serial PRIMARY KEY,
    habit_name varchar(100) NOT NULL
    );
