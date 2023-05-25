import React, { useState, useEffect } from "react";

const Box = ({ size }) => {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const intervalId = setInterval(
      () => setColor(getRandomColor()),
      Math.random() * 5000
    );
    return () => clearInterval(intervalId);
  }, []);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
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
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
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
        display: "flex",
        flexWrap: "wrap",
        height: "100vh",
        width: "100%",
        margin: "0",
      }}
    >
      {boxes}
    </div>
  );
};

export default function App() {
  return <BoxContainer numBoxes={400} boxSize={8} />;
}

// To make the boxes fill up the entire screen like a checkerboard, you can set the height of the BoxContainer div to the height of the viewport using vh units. Also, you can set the width of the BoxContainer div to 100% to make it take up the full width of the screen. Finally, to ensure that there are no gaps between the boxes, you can set the box-sizing property of the Box component to border-box.
