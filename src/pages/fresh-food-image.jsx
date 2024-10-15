import React from 'react';

const freshfoodimage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Fresh Food</h1>
      <img 
        src="/img/portfolio/fresh-food.jpg" 
        alt="Fresh Food" 
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default freshfoodimage;
