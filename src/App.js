import React, { useState, useEffect } from "react";

const Box = ({ size }) => {
  const [color, setColor] = useState(getRandomColor());
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setTimeout(
      () => setColor(getRandomColor()),
      Math.random() * 5000
    );
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, [intervalId]);

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
      }}
    />
  );
};

const BoxContainer = ({ numBoxes, boxSize }) => {
  const boxes = Array.from({ length: numBoxes }).map((_, i) => (
    <Box key={i} size={boxSize} />
  ));
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{boxes}</div>;
};

export default function App() {
  return <BoxContainer numBoxes={400} boxSize={8} />;
}

// Me - it keeps throwing this error:
// Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render. at Box (http://localhost:3000/static/js/bundle.js:28:5) at div at BoxContainer (http://localhost:3000/static/js/bundle.js:62:5) at App

// GPT - This error occurs when the component gets stuck in an infinite loop of rendering, and it's usually caused by a state update that triggers a re-render, which then triggers another state update, and so on. In your case, it looks like the useEffect hook inside the Box component is causing the issue.
// GPT - To fix this, you need to pass an empty dependency array ([]) to the useEffect hook, so that it only runs once when the component mounts, instead of running on every re-render.
