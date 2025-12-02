import React from 'react';
import PolicyTable from './components/PolicyTable';
import rawData from './data/policyData.json';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Policy Table</h1>
      <PolicyTable data={rawData} />
    </div>
  );
}

export default App;

