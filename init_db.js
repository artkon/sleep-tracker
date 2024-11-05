require('dotenv').config();
const { sql } = require('@vercel/postgres');

async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS sleep_data (
      id SERIAL PRIMARY KEY,
      date DATE NOT NULL,
      bed_time TIME,
      sleep_time TIME,
      wake_up_time TIME,
      get_up_time TIME,
      toilet_visits INT,
      workout_done BOOLEAN
    );
  `;
  console.log("Таблица создана!");
}

createTable().catch(console.error);