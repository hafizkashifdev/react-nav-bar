import React from 'react'

const About = () => {
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
      <p style={textStyle}>About</p>
    </div>
  )
}

export default About
