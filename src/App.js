import React from 'react';

import WorldStatsContainer from './components/WorldStatsContainer';
import CountryStatsContainer from './components/CountryStatsContainer';

function App() {
  return (
    <div>
      <main>
        <WorldStatsContainer />
        <CountryStatsContainer />
      </main>
    </div>
  );
}

export default App;
