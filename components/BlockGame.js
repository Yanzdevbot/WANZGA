import React, { useState, useEffect } from 'react';

const GRID_SIZE = 10;

function generateGrid() {
  return Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
}

export default function BlockGame() {
  const [grid, setGrid] = useState(generateGrid());

  const addRandomBlock = () => {
    const newGrid = [...grid.map(row => [...row])];
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    newGrid[y][x] = 1;
    setGrid(newGrid);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addRandomBlock();
    }, 1000);
    return () => clearInterval(interval);
  }, [grid]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)`,
      gap: '2px',
      marginTop: '20px'
    }}>
      {grid.flat().map((cell, i) => (
        <div
          key={i}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: cell ? 'blue' : '#ddd'
          }}
        />
      ))}
    </div>
  );
}