import React, { useState, useEffect } from 'react';

const Box = ({ size }) => {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{boxes}</div>;
};

export default function App() {
  return <BoxContainer numBoxes={400} boxSize={8} />;
}


// In this version, the Box component still takes a size prop to determine the size of the box, but instead of responding to a click, it uses the useEffect hook to automatically change colors every second. The useEffect hook sets up an interval that calls the setInterval function, which updates the color state every second using the getRandomColor function. The useEffect hook also returns a function that clears the interval when the component unmounts to prevent memory leaks.

// The BoxContainer component is unchanged, and still generates an array of Box components and renders them in a flexbox container.

// Finally, the App component renders a BoxContainer with 400 small boxes (20x20) that change colors on their own. You can adjust the numBoxes and boxSize props to customize the appearance of your app.