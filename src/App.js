import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = useState(0);
  let timer;
  const increase = (e) => {
    setValue(value + 1);
  };
  const reset = () => {
    clearTimeout(timer);
    setValue(0);
  };
  const pause = () => {
    clearTimeout(timer);
  };
  const resume = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    if (value) {
      timer = setTimeout(() => {
        setValue(value + 1);
      }, 800);
    }
  }, [value]);
  return (
    <>
      <div className="count">{value}</div>
      <div className="test">
        <input
          type="button"
          value="Start"
          onClick={(e) => increase(e)}
          disabled={value}
        />
        <input
          type="button"
          value="Pause"
          onClick={(e) => pause(e)}
          disabled={!value}
        />
        <input
          type="button"
          value="Resume"
          onClick={(e) => resume(e)}
          disabled={!value}
        />
        <input
          type="button"
          value="Reset"
          onClick={(e) => reset(e)}
          disabled={!value}
        />
      </div>
    </>
  );
}
