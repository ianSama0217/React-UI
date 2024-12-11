import React from "react";

type Props = {
  title?: string;
  type?: "circle" | "square"; //circle || square
  isChecked: boolean; //預設是否選取
  onChange?: () => void;
  disabled?: boolean;
};

const Switch: React.FC<Props> = ({
  title,
  type = "circle",
  isChecked,
  onChange = () => {},
  disabled = false,
}) => {
  return (
    <div className="switch">
      <span className="label">{title}</span>
      {type !== "circle" ? (
        <div className="button b2" id="btn-square">
          <input
            type="checkbox"
            className="checkbox"
            onChange={onChange}
            checked={isChecked}
            disabled={disabled}
          />
          <div className="knobs">
            <span></span>
          </div>
          <div className="layer"></div>
        </div>
      ) : (
        <div className="button r" id="btn-circle">
          <input
            type="checkbox"
            className="checkbox"
            onChange={onChange}
            checked={isChecked}
            disabled={disabled}
          />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      )}
    </div>
  );
};

export default Switch;
