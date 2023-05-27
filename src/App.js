import React, { useState, useEffect } from "react";

const Box = ({ size }) => {
  const [color, setColor] = useState(getRandomColor());

  // we can modify the interval time in the useEffect hook to slow down the maximum speed of changing colors. Currently, the interval time is set to a random value between 0 and 5000 milliseconds. We can increase the maximum value to, say, 10000 milliseconds by changing Math.random() * 5000 to Math.random() * 10000:
  useEffect(() => {
    const intervalId = setInterval(
      () => setColor(getRandomColor()),
      Math.random() * 10000
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
        width: `${size}%`,
        paddingBottom: `${size}%`,
        float: "left",
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
        width: "100vw",
        height: "100vh",
        margin: "0",
        overflow: "hidden",
      }}
    >
      {boxes}
    </div>
  );
};

export default function App() {
  return <BoxContainer numBoxes={400} boxSize={4} />;
}
