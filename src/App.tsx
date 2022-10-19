import React from 'react';
import b_ from 'b_';
import Calendar from './components/Calendar';

import './App.scss';

const b = b_.with('app');

function App() {
  return (
    <div className={b()}>
      <Calendar />
    </div>
  );
}

export default App;
