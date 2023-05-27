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

// In this version, we've added a new state variable called start, which is initially set to false. We also added an useEffect hook that waits for a second (using setTimeout) before setting start to true. The BoxContainer component is now only rendered when start is true.

// By setting the setTimeout delay to 1000ms, we ensure that the first interval runs after the initial delay, giving the app some time to load before starting the animation. We also slightly reduced the interval range to 500-5000ms to minimize the delay a few seconds in.
