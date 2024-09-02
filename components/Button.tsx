import React from 'react'

const Button = (
  {
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }
) => {
  return (
    <button>

      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button