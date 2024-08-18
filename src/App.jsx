import React, { useState } from 'react';
import Display from './Components/Display';
import Keyboard from './Components/Keyboard';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {
  const [value, setValue] = useState('');
  const [memory, setMemory] = useState(0);

  const handleClick = (button) => {
    if (button === '=') {
      try {
        // Reemplaza 'x' por '*' y '÷' por '/' antes de evaluar
        const expression = value.replace(/x/g, '*').replace(/÷/g, '/');
        const result = evaluate(expression);
        setValue(result.toString());
      } catch (e) {
        setValue('Error');
      }
    } else if (button === 'AC') {
      setValue('');
    } else if (button === 'CE') {
      setValue(prev => prev.slice(0, -1));
    } else if (button === '+/-') {
      setValue(prev => (prev.charAt(0) === '-' ? prev.slice(1) : '-' + prev));
    } else if (button === '%') {
      try {
        // Calcula el porcentaje
        const expression = value.replace(/x/g, '*').replace(/÷/g, '/');
        const result = evaluate(expression) / 100;
        setValue(result.toString());
      } catch (e) {
        setValue('Error');
      }
    } else if (button === 'M+') {
      setMemory(prev => prev + parseFloat(value || 0));
      setValue('');
    } else if (button === 'M-') {
      setMemory(prev => prev - parseFloat(value || 0));
      setValue('');
    } else if (button === 'MR') {
      setValue(memory.toString());
    } else if (button === 'MC') {
      setMemory(0);
    } else {
      setValue(prev => prev + button);
    }
  };

  return (
    <div className="calculator">
      <div className="close-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18"></path>
          <path d="M6 6L18 18"></path>
        </svg>
      </div>
      <Display value={value} />
      <Keyboard onClick={handleClick} />
    </div>
  );
};

export default App;
