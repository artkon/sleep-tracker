import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await sql`SELECT * FROM sleep_data ORDER BY date DESC`;
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}