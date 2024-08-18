import React from 'react';

const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={() => onClick(label)} className={`button ${className}`}>
      {label}
    </button>
  );
};

export default Button;
