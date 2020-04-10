import React from 'react';

import CountryStatsContainer from './components/CountryStatsContainer';
import WorldStatsContainer from './components/WorldStatsContainer';

function App() {
  return (
    <div className='app-wrapper'>
      <header>
        <h1>
          <span role='img' aria-label='Virus Emoji'>
            🦠
          </span>{' '}
          COVID19
        </h1>
      </header>
      <main>
        <CountryStatsContainer />
        <WorldStatsContainer />
      </main>
    </div>
  );
}

export default App;
