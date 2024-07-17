import React, { useState } from 'react';
import NumberList from './NumberList';
import TriangleArea from './TriangleArea';
import './App.css';

const App: React.FC = () => {
  const [maxNumber, setMaxNumber] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  return (
      <div className="App">
        <div>
          <label>Max Number to Print</label>
          <input
              type="number"
              value={maxNumber}
              onChange={(e) => setMaxNumber(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>The printed numbers</label>
          <NumberList maxNumber={maxNumber} />
        </div>
        <div>
          <label>Height</label>
          <input
              type="number"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
          />
          <label>Width</label>
          <input
              type="number"
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>The calculated area is printed here</label>
          <TriangleArea height={height} width={width} />
        </div>
      </div>
  );
};

export default App;
