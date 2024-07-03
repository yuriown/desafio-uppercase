import React from 'react';

function ColorfulUppercaseText({ text, color }) {
  const upperCaseText = text.toUpperCase();

  return (
    <p style={{ color: color }}>
      {upperCaseText}
    </p>
  );
}

ColorfulUppercaseText.defaultProps = {
  color: 'red',
};

export default ColorfulUppercaseText;
