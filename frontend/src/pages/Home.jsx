import React from 'react';

const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/home.html"
        title="Home Page"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
      />
    </div>
  );
};

export default Home;