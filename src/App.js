import React from 'react';
import './App.css';
import Jobs from './Jobs.js'

const mockJobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'Facebook'},
  {title: 'SWE 1', company: 'Github'}
];

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
