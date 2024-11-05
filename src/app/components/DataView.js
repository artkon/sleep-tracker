import React, { useEffect, useState } from 'react';

function DataView() {
  const [data, setData] = useState({});

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
        {Object.entries(data).map(([date, entry], idx) => (
          <tr key={idx}>
            <td>{date}</td>
            <td>{entry.bedTime}</td>
            <td>{entry.sleepTime}</td>
            <td>{entry.wakeUpTime}</td>
            <td>{entry.getUpTime}</td>
            <td>{entry.toiletVisits}</td>
            <td>{entry.workoutDone ? 'Да' : 'Нет'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataView;