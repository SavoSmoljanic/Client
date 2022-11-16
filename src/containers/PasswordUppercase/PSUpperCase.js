import React from "react";

const PUpperCase = ({ onuppercasechange }) => {
  return (
    <div className="PWUCdiv">
      <p>UpperCase:</p>
      <input
        className="PWUCinput"
        type={"checkbox"}
        onChange={onuppercasechange}
      />
    </div>
  );
};

export default PUpperCase;
