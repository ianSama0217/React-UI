import React, { useState } from "react";
import BasicLayout from "../../components/basicLayout";
import Radio from "../../components/radio";

const TestPage: React.FC = () => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (value: string) => {
    setSelected(value);
  };

  const components = [
    <Radio
      size="radio-lg"
      isChecked={selected === "dis1"}
      onChange={() => handleChange("dis1")}
      radioName="a"
      title="測試lg"
    />,
    <Radio
      size="radio-sm"
      isChecked={selected === "dis2"}
      onChange={() => handleChange("dis2")}
      radioName="a"
      title="測試sm"
    />,
    <Radio
      isChecked={selected === "dis3"}
      onChange={() => handleChange("dis3")}
      radioName="a"
      title="測試basic"
    />,
  ];

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
  };

  const codeContent = `
    const [selected, setSelected] = useState<string>("");

    const handleChange = (value: string) => {
      setSelected(value);
    };

    <Radio
      isChecked={selected === "dis1"}
      onChange={() => handleChange("dis1")}
      radioName="a"
      title="測試1"
    />
    <Radio
      isChecked={selected === "dis2"}
      onChange={() => handleChange("dis2")}
      radioName="a"
      title="測試2"
    />
    <Radio
      isChecked={selected === "dis3"}
      onChange={() => handleChange("dis3")}
      radioName="a"
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
      <Radio title="禁用radio" isChecked={false} disabled={true} />
      <Radio
        title="顯示value"
        isChecked={selected === "dis1"}
        value="123"
        onChange={handleChange2}
      />
      <Radio
        title="custom radio"
        isChecked={selected === "dis1"}
        customStyle="big"
      />
    </div>
  );
};

export default TestPage;
