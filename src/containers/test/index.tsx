import React, { useState } from "react";
import BasicLayout from "../../components/basicLayout";
import Checkbox from "../../components/checkbox";

const TestPage: React.FC = () => {
  const [dis1, setDis1] = useState<boolean>(false);
  const [dis2, setDis2] = useState<boolean>(false);
  const [dis3, setDis3] = useState<boolean>(false);

  const handleChange1 = () => {
    setDis1(!dis1);
  };

  const handleChange2 = () => {
    setDis2(!dis2);
  };

  const handleChange3 = () => {
    setDis3(!dis3);
  };

  const components = [
    <Checkbox
      size="checkbox-lg"
      isChecked={dis1}
      onChange={handleChange1}
      title="測試lg"
    />,
    <Checkbox
      size="checkbox-sm"
      isChecked={dis2}
      onChange={handleChange2}
      title="測試sm"
    />,
    <Checkbox isChecked={dis3} onChange={handleChange3} title="測試basic" />,
  ];

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    </div>
  );
};

export default TestPage;
