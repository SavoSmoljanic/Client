import React from "react";

const Password = ({ onbuttonClick }) => {
  return (
    <div>
      <div className="generatebuttondiv">
        <button
          onClick={onbuttonClick}
          disabled={false}
          className="generatebutton"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

const PSLength = ({ onLengthSelection }) => {
  return (
    <div className="centerDiv">
      <p>Length:</p>
      <input
        className="centerInput"
        type={"number"}
        min={5}
        max={14}
        onChange={onLengthSelection}
      />
    </div>
  );
};

const PUpperCase = ({ onuppercasechange }) => {
  return (
    <div className="centerDiv">
      <p>UpperCase:</p>
      <input
        className="centerInput"
        type={"checkbox"}
        onChange={onuppercasechange}
      />
    </div>
  );
};

const PSpecialCharacter = ({ onspecialchange }) => {
  return (
    <div className="centerDiv">
      <p>Special Characters:</p>
      <input
        className="centerInput"
        type={"checkbox"}
        onChange={onspecialchange}
      />
    </div>
  );
};

export { Password, PUpperCase, PSpecialCharacter, PSLength };
