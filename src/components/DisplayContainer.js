import React, { useState, useEffect } from 'react';

const DisplayContainer = () => {
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

  console.log(stats);
  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>ERROR!</h2>
  ) : (
    <div style={{ textAlign: `center` }}>
      <h2>Confirmed:</h2>
      <span>
        {stats.confirmed ? stats.confirmed.value.toLocaleString() : null}
      </span>
      <h2>Deaths:</h2>
      <span>{stats.deaths ? stats.deaths.value.toLocaleString() : null}</span>
      <h2>Recovered:</h2>
      <span>
        {stats.recovered ? stats.recovered.value.toLocaleString() : null}
      </span>
    </div>
  );
};

export default DisplayContainer;
