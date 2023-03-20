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


// In this example, the Box component takes a size prop to determine the size of the div. It also uses the useState hook to maintain a state of the current color of the div. The handleClick function is called whenever the div is clicked, which updates the color state to a new randomly generated color using the getRandomColor function.

// The BoxContainer component takes a numBoxes prop to determine the number of divs to render, and a boxSize prop to determine the size of each div. It generates an array of Box components using Array.from and the map function, and then renders them in a flexbox container using the display and flexWrap CSS properties.

// Finally, the App component simply renders a BoxContainer with 50 divs of size 30 pixels. You can adjust these values as needed to customize the appearance of your app.