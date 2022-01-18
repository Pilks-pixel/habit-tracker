DROP TABLE IF EXISTS habits_facts;

CREATE TABLE habits_facts (
    id serial PRIMARY KEY,
    hplan_id INT,
    hfact_timestamp TIMESTAMP
    );