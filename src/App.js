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
        borderRadius: "50%",
        width: `${size}vw`,
        paddingBottom: `${size}vw`,
        float: "left",
        boxSizing: "border-box",
      }}
    />
  );
};

const BoxContainer = ({ numBoxes, boxSize, backgroundColor }) => {
  const boxes = Array.from({ length: numBoxes }).map((_, i) => (
    <Box key={i} size={boxSize} />
  ));

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        overflow: "hidden",
        backgroundColor: backgroundColor,
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      {boxes}
    </div>
  );
};

export default function App() {
  const [start, setStart] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  useEffect(() => {
    const timeoutId = setTimeout(() => setStart(true), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(
      () => setBackgroundColor(getRandomColor()),
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

  return start ? (
    <BoxContainer
      numBoxes={400}
      boxSize={4}
      backgroundColor={backgroundColor}
    />
  ) : null;
}

// Here, we're using the vw unit to set the width and paddingBottom properties of the circle to size percent of the viewport width. This will make the circles take up the same percentage of the screen width and height no matter the size of the screen.

// Note that we also updated the borderRadius property to 50% to ensure that the circles are always circular.
