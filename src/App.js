import React, { useState } from 'react';

const Box = ({ size }) => {
  const [color, setColor] = useState(getRandomColor());

  function handleClick() {
    setColor(getRandomColor());
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        margin: '5px',
      }}
    />
  );
};

const BoxContainer = ({ numBoxes, boxSize }) => {
  const boxes = Array.from({ length: numBoxes }).map((_, i) => (
    <Box key={i} size={boxSize} />
  ));
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{boxes}</div>;
};

export default function App() {
  return <BoxContainer numBoxes={50} boxSize={30} />;
}
