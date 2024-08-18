import React from 'react';

const Keyboard = ({ onClick }) => {
  return (
    <div className="keyboard">
      <button onClick={() => onClick('AC')}>AC</button>
      <button onClick={() => onClick('CE')}>CE</button>
      <button onClick={() => onClick('%')}>%</button>
      <button onClick={() => onClick('÷')}>÷</button>
      <button onClick={() => onClick('7')}>7</button>
      <button onClick={() => onClick('8')}>8</button>
      <button onClick={() => onClick('9')}>9</button>
      <button onClick={() => onClick('x')}>x</button>
      <button onClick={() => onClick('4')}>4</button>
      <button onClick={() => onClick('5')}>5</button>
      <button onClick={() => onClick('6')}>6</button>
      <button onClick={() => onClick('-')}>-</button>
      <button onClick={() => onClick('1')}>1</button>
      <button onClick={() => onClick('2')}>2</button>
      <button onClick={() => onClick('3')}>3</button>
      <button onClick={() => onClick('+')}>+</button>
      <button onClick={() => onClick('0')}>0</button>
      <button onClick={() => onClick('.')}>.</button>
      <button onClick={() => onClick('+/-')}>+/-</button>
      <button onClick={() => onClick('=')}>=</button>
      <button onClick={() => onClick('M+')}>M+</button>
      <button onClick={() => onClick('M-')}>M-</button>
      <button onClick={() => onClick('MR')}>MR</button>
      <button onClick={() => onClick('MC')}>MC</button>
    </div>
  );
};

export default Keyboard;
