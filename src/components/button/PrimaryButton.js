import React from "react";

const PrimaryButton = ({ btnText, Icon, type, btnWidth, disabled, size }) => {
  return (
    <button
      className={`${btnWidth} btn-primary`}
      type={type}
      disabled={disabled}
    >
      <span className="pr-3">{btnText}</span>
      {Icon && <Icon size={size} />}
    </button>
  );
};

export default PrimaryButton;
