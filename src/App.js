import React, { useState, useEffect } from "react";
import "./App.css";

// This is a functional component that renders a colored box with a specified size
const Box = ({ size }) => {
  const [color, setColor] = useState(getRandomColor()); // Initialize state for the color of the box using the getRandomColor function

  useEffect(() => {
    // Use the useEffect hook to change the color of the box at random intervals
    const intervalId = setInterval(
      () => setColor(getRandomColor()),
      Math.random() * 4500 + 500
    ); // Set an interval that calls getRandomColor and sets the color of the box using setColor
    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, []);

  function getRandomColor() {
    // This function generates a random hexadecimal color code
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Render the colored box with the specified size
  return (
    <div
      className="box"
      style={{
        // boxShadow: `inset ${size / 5}px -${size / 1}px ${size * 2}px #353535`,
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

// This is for the link to my gitHub page in the seventh dot
const GitBox = ({ size }) => {
  const [color, setColor] = useState(getRandomColor()); // Initialize state for the color of the box using the getRandomColor function

  useEffect(() => {
    // Use the useEffect hook to change the color of the box at random intervals
    const intervalId = setInterval(
      () => setColor(getRandomColor()),
      Math.random() * 4500 + 500
    ); // Set an interval that calls getRandomColor and sets the color of the box using setColor
    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, []);

  function getRandomColor() {
    // This function generates a random hexadecimal color code
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Render the colored box with the specified size and a GitHub icon
  return (
    <div
      className="gitBox box"
      style={{
        // boxShadow: `inset ${size / 5}px -${size / 1}px ${size * 2}px #353535`,
        backgroundColor: color,
        borderRadius: "50%",
        width: `${size}vw`,
        paddingTop: `${size / 10}vw`,
        paddingBottom: `${size / 10}vw`,
        float: "left",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: `${size / 1.5}vw`,
      }}
    >
      <a
        href="https://github.com/IntuitiveHarmony/party-dots#readme"
        className="pinkLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};

// A React functional component that renders multiple boxes using the Box component
const BoxContainer = ({ numBoxes, boxSize, backgroundColor }) => {
  // Create an array of boxes with the specified number and size
  const boxes = Array.from({ length: numBoxes }).map((_, i) =>
    // If statement to laydown the github link
    i == 13 ? <GitBox key={i} size={boxSize} /> : <Box key={i} size={boxSize} />
  );

  // Render the box container with the specified background color and style
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
  const [start, setStart] = useState(false); // state to determine whether the animation has started
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor()); // state to set the background color of the animation

  useEffect(() => {
    // useEffect to set a timeout that will start the animation after 1 second
    const timeoutId = setTimeout(() => setStart(true), 1000);
    return () => clearTimeout(timeoutId); // cleanup function to clear the timeout when the component unmounts
  }, []);

  useEffect(() => {
    // useEffect to set an interval that will change the background color every 0.5 to 5 seconds
    const intervalId = setInterval(
      () => setBackgroundColor(getRandomColor()),
      Math.random() * 4500 + 500
    );
    return () => clearInterval(intervalId); // cleanup function to clear the interval when the component unmounts
  }, []);

  function getRandomColor() {
    // helper function to generate a random hexadecimal color
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // if the animation has started, render the BoxContainer component with 400 boxes, a box size of 7vw, and the current background color, otherwise render nothing
  return start ? (
    <BoxContainer
      numBoxes={406}
      boxSize={7}
      backgroundColor={backgroundColor}
    />
  ) : (
    <h1>
      loading dots<span className="dot1">.</span>
      <span className="dot2">.</span>
      <span className="dot3">.</span>
    </h1>
  );
}
