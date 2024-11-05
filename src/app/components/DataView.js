import React, { useEffect, useState } from 'react';

function DataView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/getSleepData');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Лёг в кровать</th>
          <th>Уснул</th>
          <th>Проснулся</th>
          <th>Встал</th>
          <th>Вставал в туалет</th>
          <th>Сделал зарядку</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.date}</td>
            <td>{entry.bed_time}</td>
            <td>{entry.sleep_time}</td>
            <td>{entry.wake_up_time}</td>
            <td>{entry.get_up_time}</td>
            <td>{entry.toilet_visits}</td>
            <td>{entry.workout_done ? 'Да' : 'Нет'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataView;