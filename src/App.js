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
      <footer>
        <a href='https://twitter.com/DavidGeorgeBell' alt='Creators Twitter'>
          Made by @DavidGeorgeBell
        </a>
      </footer>
    </div>
  );
}

export default App;
