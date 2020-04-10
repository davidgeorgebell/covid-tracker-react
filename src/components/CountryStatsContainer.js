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
  console.log(stats);

  return loading ? null : error ? (
    <h2>Error getting stats!</h2>
  ) : (
    <div>
      <h1>
        Britain
        <span role='img' aria-label='British Flag Emoji'>
          🇬🇧
        </span>
      </h1>
      <h2>Confirmed:</h2>
      <span>
        {stats.confirmed ? stats.confirmed.value.toLocaleString() : null}
      </span>
      <h2>Deaths:</h2>
      <span>
        {stats.confirmed ? stats.confirmed.value.toLocaleString() : null}
      </span>
      <h2>Recovered:</h2>
      <span>
        {stats.recovered ? stats.recovered.value.toLocaleString() : null}
      </span>
    </div>
  );
};

export default CountryStatsContainer;
