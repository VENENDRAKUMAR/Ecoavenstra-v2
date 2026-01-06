import React from 'react';
import Sketch from 'react-p5'; // This is the p5.js wrapper for React

const GenerativeWaves = () => {
  // A variable to keep track of time, which drives the animation
  let time = 0;
  
  // Settings for the waves
  const numLines = 100;    // Number of vertical lines
  const lineResolution = 5; // How many points in each line (higher is smoother)
  const noiseScale = 0.002; // How "zoomed in" the noise is (smaller = smoother waves)
  const waveSpeed = 0.003;  // How fast the waves animate
  const waveAmplitude = 150; // How much the lines will move left/right

  // This is the p5.js setup function
  // It runs once when the component mounts
  const setup = (p5, canvasParentRef) => {
    // Create the canvas to fill its parent container
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noFill(); // We only want to draw lines, not filled shapes
    p5.stroke(255, 100); // White lines with some transparency (alpha = 100)
    p5.strokeWeight(1); // Thin lines
  };

  // This is the p5.js draw function
  // It runs continuously on every frame (like an animation loop)
  const draw = (p5) => {
    p5.background(10, 10, 20); // Dark navy/black background each frame

    // Calculate the horizontal spacing for each line
    const lineSpacing = p5.width / (numLines - 1);

    // Loop for each vertical line
    for (let i = 0; i < numLines; i++) {
      const x = i * lineSpacing;
      
      p5.beginShape(); // Start drawing a new line shape

      // Loop for each point *down* the vertical line
      for (let y = -10; y < p5.height + 10; y += lineResolution) {
        
        // ✨ This is the magic! ✨
        // We use p5.noise() to get a smooth, random value
        // It's based on the y-position, x-position, and the current time
        const noiseValue = p5.noise(
          x * noiseScale, 
          y * noiseScale, 
          time
        );
        
        // Map the noise value (which is 0 to 1) to our desired amplitude
        // This creates the side-to-side offset
        const xOffset = p5.map(noiseValue, 0, 1, -waveAmplitude, waveAmplitude);

        // Add the point (vertex) to our line shape
        p5.vertex(x + xOffset, y);
      }
      
      p5.endShape(); // Stop drawing the line
    }

    // Move time forward to animate the noise field
    time += waveSpeed;
  };

  // Handle window resizing
  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default GenerativeWaves;