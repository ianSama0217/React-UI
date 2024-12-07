import React from "react";

type Props = {
  style?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-warning";
  size?: "btn-sm" | "btn-lg";
  title?: string;
  startIcon?: string | React.ReactNode;
  endIcon?: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  customStyle?: string;
};

const Button: React.FC<Props> = ({
  style = "primary",
  size,
  title,
  startIcon,
  endIcon,
  onClick,
  disabled = false,
  customStyle,
}) => {
  return (
    <div className="button">
      <button
        className={`basic ${style} ${size} ${customStyle} ${
          disabled ? "disabled" : ""
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {startIcon && (
          <div className={title ? "start-icon" : ""}>
            {typeof startIcon === "string" ? (
              <img src={startIcon} alt="icon" />
            ) : (
              startIcon
            )}
          </div>
        )}
        {title}
        {endIcon && (
          <div className={title ? "end-icon" : ""}>
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
