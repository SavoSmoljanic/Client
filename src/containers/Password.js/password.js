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

export default Password;
