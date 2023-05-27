import React, { useState, useEffect } from "react";

const Box = ({ size }) => {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const intervalId = setInterval(
      () => setColor(getRandomColor()),
      Math.random() * 4500 + 500
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
        borderRadius: "30px",
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
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setStart(true), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return start ? <BoxContainer numBoxes={400} boxSize={4} /> : null;
}
