import React from "react";

type Props = {
  size?: "checkbox-sm" | "checkbox-lg";
  title?: string;
  value?: string;
  isChecked: boolean; //預設是否選取
  onChange?: (prop?: any) => void;
  disabled?: boolean;
  customStyle?: string;
};

const Checkbox: React.FC<Props> = ({
  size,
  title,
  value,
  isChecked,
  onChange = () => {},
  disabled,
  customStyle,
}) => {
  return (
    <div className="checkbox">
      {isChecked && disabled ? (
        <div className={`grid ${size}`}>
          <input
            type="checkbox"
            value={value}
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
            type="checkbox"
            value={value}
            checked
            className={`basic ${customStyle}`}
            onChange={onChange}
          />
          <span>{title}</span>
        </div>
      ) : disabled ? (
        <div className={`grid ${size}`}>
          <input
            type="checkbox"
            value={value}
            disabled
            className={`basic  ${customStyle}`}
            onChange={onChange}
          />
          <span>{title}</span>
        </div>
      ) : (
        <div className={`grid ${size}`}>
          <input
            type="checkbox"
            value={value}
            className={`basic ${customStyle}`}
            onChange={onChange}
          />
          <span>{title}</span>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
