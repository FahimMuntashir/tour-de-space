import React, { useState } from 'react';

function button2() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: isHovered ? '#007bff' : '#ccc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="App">
      <button
        style={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover Me
      </button>
    </div>
  );
}

export default button2;
