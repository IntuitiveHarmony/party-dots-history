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
        margin: "1px",
        flex: "1 0 0",
      }}
    />
  );
};
// This should create a BoxContainer that takes up the entire page. Let me know if this helps!
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
        width: "100vw",
        alignItems: "stretch",
        justifyContent: "stretch",
        padding: "0",
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
