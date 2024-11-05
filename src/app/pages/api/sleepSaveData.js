let sleepDataStore = {}; // Временное хранилище в памяти (для тестирования)

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { date, data } = req.body;
    sleepDataStore[date] = data; // Сохраняем данные в памяти
    return res.status(200).json({ message: 'Data saved successfully' });
  }
  return res.status(405).json({ message: 'Method not allowed' });
}