import React from "react";

const PSpecialCharacter = ({ onspecialchange }) => {
  return (
    <div className="PWSCdiv">
      <p>Special Characters:</p>
      <input
        className="PWSCinput"
        type={"checkbox"}
        onChange={onspecialchange}
      />
    </div>
  );
};

export default PSpecialCharacter;
