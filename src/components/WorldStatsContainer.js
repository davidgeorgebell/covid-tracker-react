import React, { useState, useEffect } from 'react';

const WorldStatsContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://covid19.mathdro.id/api');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, []);

  return loading ? null : error ? (
    <h2>ERROR!</h2>
  ) : (
    <div className='table-wrapper'>
      <table>
        <caption>
          World Wide{' '}
          <span role='img' aria-label='World Emoji'>
            🌎
          </span>
        </caption>
        <thead>
          <tr>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {stats.confirmed ? stats.confirmed.value.toLocaleString() : null}
            </td>
            <td>{stats.deaths ? stats.deaths.value.toLocaleString() : null}</td>
            <td>
              {stats.recovered ? stats.recovered.value.toLocaleString() : null}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorldStatsContainer;
