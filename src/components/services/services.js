import React from 'react';

const Services = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100vh', 
  };

  const textStyle = {
    fontSize: '24px', 
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>Services</p>
    </div>
  );
}

export default Services;
