export default function handler(req, res) {
    if (req.method === 'GET') {
      return res.status(200).json(sleepDataStore); // Отправляем данные из памяти
    }
    return res.status(405).json({ message: 'Method not allowed' });
}