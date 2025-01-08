import React from "react";

type Props = {
  size?: "radio-sm" | "radio-lg";
  title?: string;
  value?: string;
  radioName?: string;
  isChecked: boolean; //預設是否選取
  onChange?: (prop?: any) => void;
  disabled?: boolean;
  customStyle?: string;
};

const Radio: React.FC<Props> = ({
  size,
  title,
  value,
  radioName,
  isChecked,
  onChange = () => {},
  disabled,
  customStyle,
}) => {
  return (
    <div className="radio">
      {isChecked && disabled ? (
        <div className={`grid ${size}`}>
          <input
            type="radio"
            value={value}
            name={radioName}
            checked
            disabled
            className={`basic ${customStyle}`}
            onChange={onChange}
          />
          <span>{title}</span>
        </div>
      ) : isChecked ? (
        <div className={`grid ${size}`}>
          <input
            type="radio"
            value={value}
            name={radioName}
            checked
            className={`basic ${customStyle}`}
            onChange={onChange}
          />
          <span>{title}</span>
        </div>
      ) : disabled ? (
        <div className={`grid ${size}`}>
          <input
            type="radio"
            value={value}
            name={radioName}
            disabled
            className={`basic  ${customStyle}`}
            onChange={onChange}
          />
          <span>{title}</span>
        </div>
      ) : (
        <div className={`grid ${size}`}>
          <input
            type="radio"
            value={value}
            name={radioName}
            className={`basic ${customStyle}`}
            onChange={onChange}
          />
          <span>{title}</span>
        </div>
      )}
    </div>
  );
};

export default Radio;
