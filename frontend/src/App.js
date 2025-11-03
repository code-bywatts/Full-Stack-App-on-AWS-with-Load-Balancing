import React, { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('http://YOUR-LOAD-BALANCER-DNS/api')
      .then(res => res.json())
      .then(data => setApiData(data));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>🌍 Full Stack App on AWS</h1>
      {apiData ? (
        <>
          <p>{apiData.message}</p>
          <p>Response from: {apiData.servedBy}</p>
        </>
      ) : (
        <p>Loading from backend...</p>
      )}
    </div>
  );
}

export default App;
