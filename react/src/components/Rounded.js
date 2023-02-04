import React from "react";

function Rounded(props) {
  const roundedNmb = Math.round(props.number * 100) / 100;

  return (
    <div>
      <p>{roundedNmb}</p>
    </div>
  );
}

export default Rounded;
