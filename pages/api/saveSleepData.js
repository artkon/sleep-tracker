import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { date, data } = req.body;
    const { bedTime, sleepTime, wakeUpTime, getUpTime, toiletVisits, workoutDone } = data;

    try {
      await sql`
        INSERT INTO sleep_data (date, bed_time, sleep_time, wake_up_time, get_up_time, toilet_visits, workout_done)
        VALUES (${date}, ${bedTime}, ${sleepTime}, ${wakeUpTime}, ${getUpTime}, ${toiletVisits}, ${workoutDone})
      `;
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving data', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}