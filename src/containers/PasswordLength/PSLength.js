import React from "react";

const PSLength = ({ onLengthSelection }) => {
  return (
    <div className="lengthdiv">
      <p>Length:</p>
      <input
        className="lengthinput"
        type={"number"}
        min={5}
        max={14}
        onChange={onLengthSelection}
      />
    </div>
  );
};

export default PSLength;
