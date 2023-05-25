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
        width: `${size}%`,
        paddingBottom: `${size}%`,
        float: "left",
        boxSizing: "border-box",
      }}
    />
  );
};
// Okay, let's try modifying the BoxContainer component to fill the entire height of the screen. We can do this by setting the height of the BoxContainer div to 100vh, which means 100% of the viewport height. Here's the modified BoxContainer component:
const BoxContainer = ({ boxSize }) => {
  const [numBoxes, setNumBoxes] = useState(0);

  const calculateNumBoxes = () => {
    const boxContainer = document.getElementById("box-container");
    const containerWidth = boxContainer.offsetWidth;
    const containerHeight = window.innerHeight - boxContainer.offsetTop;
    const horizontalBoxes = Math.floor(containerWidth / boxSize);
    const verticalBoxes = Math.floor(containerHeight / boxSize);
    setNumBoxes(horizontalBoxes * verticalBoxes);
  };

  useEffect(() => {
    calculateNumBoxes();
    window.addEventListener("resize", calculateNumBoxes);
    return () => window.removeEventListener("resize", calculateNumBoxes);
  }, []);

  const boxes = Array.from({ length: numBoxes }).map((_, i) => (
    <Box key={i} size={boxSize} />
  ));

  return (
    <div id="box-container" style={{ margin: "0", padding: "0" }}>
      {boxes}
    </div>
  );
};

export default function App() {
  return <BoxContainer numBoxes={400} boxSize={2} />;
}
