import React from "react";

type Props = {
  title?: string;
  size?: "slider-sm" | "slider-lg";
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (prop?: any) => void;
  customStyle?: string;
};

const Slider: React.FC<Props> = ({
  title,
  size,
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange = () => {},
  customStyle,
}) => {
  return (
    <div className="slider">
      <span>{title}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className={`basic ${customStyle} ${size}`}
      />
      <span>{value}</span>
    </div>
  );
};

export default Slider;
