import React from "react";

const CapitalFirstLetter = ({ text }) => {
  if (!text) return null; // Handle empty or undefined text
  return (
    <p>
      <span className="text-7xl leading-[0]">{text.charAt(0)}</span>
      {text.slice(1)}
    </p>
  );
};

export default CapitalFirstLetter;
