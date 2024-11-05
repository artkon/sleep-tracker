import React, { useState } from 'react';

function SleepForm() {
  const [formData, setFormData] = useState({
    bedTime: '',
    sleepTime: '',
    wakeUpTime: '',
    getUpTime: '',
    toiletVisits: 0,
    workoutDone: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toISOString().slice(0, 10);
    await fetch('/api/saveSleepData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, data: formData }),
    });
    alert('Данные сохранены!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Время, когда лёг в кровать: <input type="time" name="bedTime" value={formData.bedTime} onChange={handleChange} /></label>
      <label>Время, когда уснул: <input type="time" name="sleepTime" value={formData.sleepTime} onChange={handleChange} /></label>
      <label>Время, когда проснулся: <input type="time" name="wakeUpTime" value={formData.wakeUpTime} onChange={handleChange} /></label>
      <label>Время, когда встал: <input type="time" name="getUpTime" value={formData.getUpTime} onChange={handleChange} /></label>
      <label>Сколько раз вставал в туалет: <input type="number" name="toiletVisits" value={formData.toiletVisits} onChange={handleChange} /></label>
      <label>Сделал ли зарядку: <input type="checkbox" name="workoutDone" checked={formData.workoutDone} onChange={handleChange} /></label>
      <button type="submit">Сохранить</button>
    </form>
  );
}

export default SleepForm;