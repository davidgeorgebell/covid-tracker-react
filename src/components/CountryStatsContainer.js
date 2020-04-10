import React, { useEffect, useState } from 'react';

const CountryStatsContainer = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://covid19.mathdro.id/api/countries/GB'
        );
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
    <h2>Error getting stats!</h2>
  ) : (
    <div className='table-wrapper'>
      <table>
        <caption>
          Great Britain{' '}
          <span role='img' aria-label='British Flag Emoji'>
            🇬🇧
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
            <td>
              {' '}
              {stats.deaths ? stats.deaths.value.toLocaleString() : null}
            </td>
            <td>
              {' '}
              {stats.recovered ? stats.recovered.value.toLocaleString() : null}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryStatsContainer;
