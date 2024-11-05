'use client'

import React, { useState } from 'react';
import SleepForm from './components/SleepForm';
import DataView from './components/DataView';

export default function Home() {
  const [view, setView] = useState('form'); // Переключение режимов

  return (
    <div className="App">
      <header>
        <h1>Sleep Tracker</h1>
        <button onClick={() => setView('form')}>Форма</button>
        <button onClick={() => setView('data')}>Просмотр</button>
      </header>
      {view === 'form' ? <SleepForm /> : <DataView />}
    </div>
  );
}
