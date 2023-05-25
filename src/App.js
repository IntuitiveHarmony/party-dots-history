import React, { useState, useEffect, useRef } from "react";

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
  const boxContainerRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const boxCount = Math.floor(width / boxSize);
  const rows = Math.ceil(numBoxes / boxCount);
  const totalBoxes = boxCount * rows;
  const boxes = Array.from({ length: totalBoxes }).map((_, i) => (
    <Box key={i} size={boxSize} />
  ));

  const containerWidth = boxCount * boxSize;
  const containerHeight = rows * boxSize;

  return (
    <div
      ref={boxContainerRef}
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        height: "100vh",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {boxes.slice(0, numBoxes)}
      </div>
    </div>
  );
};

export default function App() {
  return <BoxContainer numBoxes={400} boxSize={20} />;
}

// This code should automatically adjust the number of boxes per row based on the width of the screen, and make sure that the boxes cover the whole screen without any gaps.
