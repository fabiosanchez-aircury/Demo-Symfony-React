import React, { useState, useEffect } from 'react';

function ApiComponent() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/apiCheck')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching API:', error));
  }, []);

  return (
    <div className="container">
      <h1>API Response</h1>
      {apiData ? (
        <div>
          <p>Status: {apiData.status}</p>
          <p>Code: {apiData.code}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiComponent;
