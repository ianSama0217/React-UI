import React, { useState } from "react";
import BasicLayout from "../../components/basicLayout";
import Slider from "../../components/slider";

const TestPage: React.FC = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const components = [
    <Slider title="音量" value={value} onChange={handleChange} />,
    <Slider
      title="音量"
      value={value}
      onChange={handleChange}
      size="slider-sm"
    />,
    <Slider
      title="音量"
      value={value}
      onChange={handleChange}
      size="slider-lg"
    />,
  ];

  const codeContent = `
    <Slider title="音量" value={value} onChange={handleChange} />
    <Slider
      title="音量"
      value={value}
      onChange={handleChange}
      size="slider-sm"
    />
    <Slider
      title="音量"
      value={value}
      onChange={handleChange}
      size="slider-lg"
    />
`;

  return (
    <div className="flex-column ai-center w-full basic-bg">
      <span style={{ color: "white", fontSize: "1.5rem" }}>TEST</span>
      <BasicLayout
        title="測試Layout"
        components={components}
        code={codeContent}
      />
    </div>
  );
};

export default TestPage;
