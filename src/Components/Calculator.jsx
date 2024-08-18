import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input)); // Evalúa la expresión aritmética
    } catch {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const clearEntry = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        <button onClick={clearInput}>C/AC</button>
        <button onClick={clearEntry}>CE</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('/')}>÷</button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>×</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>−</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('±')}>+/-</button>
        <button onClick={calculateResult}>=</button>

        <button onClick={() => handleButtonClick('M+')}>M+</button>
        <button onClick={() => handleButtonClick('M-')}>M−</button>
        <button onClick={() => handleButtonClick('MR')}>MR</button>
        <button onClick={() => handleButtonClick('MC')}>MC</button>
      </div>
    </div>
  );
}

export default Calculator;
