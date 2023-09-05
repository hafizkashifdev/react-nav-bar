import React from 'react'

const Home = () => {

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
      <p style={textStyle}>Home</p>
    </div>
  )
}

export default Home
