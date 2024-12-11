import React, { useState } from "react";
import BasicLayout from "../../components/basicLayout";
import Switch from "../../components/switch";

const TestPage: React.FC = () => {
  const [dis, setDis] = useState<boolean>(false);

  function handleChange() {
    setDis(!dis);
  }

  const components = [
    <Switch title="wifi" isChecked={dis} onChange={handleChange} />,
    <Switch title="abc" isChecked={true} />,
    // <Switch title="Test" isChecked={true} />,
    <Switch
      title="test"
      type="square"
      isChecked={dis}
      onChange={handleChange}
    />,
    <Switch title="測試" type="square" isChecked={true} />,
    // <Switch title="測試" type="square" isChecked={true} disabled={true} />,
  ];

  const codeContent = `
    const [dis, setDis] = useState<boolean>(false);

    function handleChange() {
      setDis(!dis);
    }

    <Switch title="wifi" isChecked={dis} onChange={handleChange} />
    <Switch title="abc" isChecked={true} />
    <Switch
      title="test"
      type="square"
      isChecked={dis}
      onChange={handleChange}
    />
    <Switch title="測試" type="square" isChecked={true} />
`;

  return (
    <div className="flex-column ai-center w-full basic-bg">
      <span style={{ color: "white", fontSize: "1.5rem" }}>TEST</span>
      <BasicLayout
        title="測試Layout"
        components={components}
        code={codeContent}
      />
      <span style={{ color: "white", fontSize: "1rem" }}>Switch</span>
      <Switch isChecked={false} />
    </div>
  );
};

export default TestPage;
