import React, { useState } from "react";
import { SliderSize, SliderSizeContent } from "./info";
import BasicLayouy from "../../components/basicLayout";
import Slider from "../../components/slider";

const SliderPage: React.FC = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const basicSlider = [
    <Slider
      title="basic slider"
      value={value}
      min={10}
      max={50}
      step={10}
      onChange={handleChange}
    />,
  ];

  const basicSliderContent = `
    const [value, setValue] = useState<number>(30);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(event.target.value));
    };
  
    <Slider
      title="basic slider"
      value={value}
      min={10}
      max={50}
      step={10}
      onChange={handleChange}
    />
  `;

  return (
    <div className="button-page  flex-column ai-center w-full basic-bg">
      <BasicLayouy
        title="basic Slider style"
        components={basicSlider}
        code={basicSliderContent}
      />
      <BasicLayouy
        title="Slider size"
        components={SliderSize}
        code={SliderSizeContent}
      />
    </div>
  );
};

export default SliderPage;
