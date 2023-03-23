import React, { useState, useEffect } from 'react';

const Box = ({ size }) => {
  const [color, setColor] = useState(getRandomColor());
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => setColor(getRandomColor()), Math.random() * 5000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, [intervalId]);

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
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        margin: '1px',
      }}
    />
  );
};

const BoxContainer = ({ numBoxes, boxSize }) => {
  const boxes = Array.from({ length: numBoxes }).map((_, i) => (
    <Box key={i} size={boxSize} />
  ));
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {boxes}
    </div>
  );
};

export default function App() {
  return <BoxContainer numBoxes={400} boxSize={8} />;
}
// In this version, the BoxContainer component now has a flexDirection property set to column which stacks the boxes vertically. The width and height properties are set to 100% to make it fill the entire viewport, and the overflow property is set to hidden to prevent scrollbars.

// Finally, the App component renders a BoxContainer with 400 small boxes (20x20) that change colors at random intervals, and now the boxes should fill up the entire page without any gaps. You can adjust the numBoxes and boxSize props to customize the appearance of your app.