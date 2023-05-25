import React, { useState, useEffect } from "react";

const Box = ({ size, color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        margin: "0",
        padding: "0",
      }}
    />
  );
};

const BoxContainer = ({ numRows, numCols, boxSize }) => {
  const [colors, setColors] = useState([]);
  const colorMap = { 0: "#000000", 1: "#FFFFFF" };

  useEffect(() => {
    const newColors = Array.from(
      { length: numRows * numCols },
      (_, i) => colorMap[(i + Math.floor(i / numCols)) % 2]
    );
    setColors(newColors);
  }, [numRows, numCols]);

  const boxes = colors.map((color, i) => (
    <Box key={i} size={boxSize} color={color} />
  ));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, ${boxSize}px)`,
        gridGap: "0px",
      }}
    >
      {boxes}
    </div>
  );
};

export default function App() {
  return <BoxContainer numRows={50} numCols={50} boxSize={10} />;
}

// In this approach, we use a BoxContainer component that takes in the number of rows and columns we want, and generates a checkerboard pattern using the useState and useEffect hooks. The Box component is the same as before. We use CSS grid layout to display the boxes in a checkerboard pattern with no gaps between them
