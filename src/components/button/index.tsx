import React from "react";

type Props = {
  style?: "primary" | "secondary" | "success" | "danger" | "warning";
  title?: string;
  startIcon?: string | React.ReactNode;
  endIcon?: string | React.ReactNode;
  onClick?: () => void;
  customStyle?: string;
};

const Button: React.FC<Props> = ({
  style = "primary",
  title,
  startIcon,
  endIcon,
  onClick,
  customStyle,
}) => {
  return (
    <div className="button">
      <button className={`basic ${style} ${customStyle}`} onClick={onClick}>
        {startIcon && (
          <div className="icon">
            {typeof startIcon === "string" ? (
              <img src={startIcon} alt="icon" />
            ) : (
              startIcon
            )}
          </div>
        )}
        {title}
        {endIcon && (
          <div className="icon">
            {typeof endIcon === "string" ? (
              <img src={endIcon} alt="icon" />
            ) : (
              endIcon
            )}
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
