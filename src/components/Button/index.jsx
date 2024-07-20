import React from 'react';

const Button = ({ label, type = 'button', onClick, className }) => {
  return (
    <button
      className={`w-full bg-blue-1100 text-white-1300 py-2 rounded-md ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
