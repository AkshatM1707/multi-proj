import { useState } from "react";
import "./RandomColor.css";

export default function RandomColor() {
  const [color, setColor] = useState("#ffffff");

  // Generate random hex color
  function generateHexColor() {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor(hex);
  }

  // Generate random rgb color
  function generateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb);
  }

  // Generate either hex or rgb randomly
  function generateRandomColor() {
    const random = Math.random();
    if (random < 0.5) {
      generateHexColor();
    } else {
      generateRgbColor();
    }
  }

  return (
    <div className="container">
        <h3>Random Color Generator</h3>
      <h2>Current Color: <span>{color}</span></h2>
      <div className="button-group">
        <button onClick={generateHexColor}>Generate Hex Color</button>
        <button onClick={generateRgbColor}>Generate RGB Color</button>
        <button onClick={generateRandomColor}>Generate Random</button>
      </div>
      <div className="colorBox" style={{ backgroundColor: color }}></div>
    </div>
  );
}
