import React, { useState } from "react";
import BasicLayout from "../../components/basicLayout";
import Button from "../../components/button";

const TestPage: React.FC = () => {
  const [dis, setDis] = useState<boolean>(false);

  const components = [
    <Button
      title="測試按鈕"
      style="primary"
      startIcon={<i className="fa-solid fa-location-dot"></i>}
      disabled={dis}
      onClick={() => {
        setDis(true);
      }}
    />,
    <Button title="測試按鈕" style="secondary" size="btn-sm" disabled={dis} />,
    <Button
      style="success"
      startIcon={<i className="fa-regular fa-share-from-square"></i>}
      onClick={() => {
        setDis(true);
      }}
    />,
    <Button title="測試按鈕" style="outline-warning" size="btn-lg" />,
    <Button
      title="測試按鈕"
      style="danger"
      endIcon={<i className="fa-solid fa-location-dot"></i>}
    />,
  ];

  const codeContent = `
    <Button title="測試按鈕" style="primary" />
    <Button title="測試按鈕" style="secondary" />
    <Button title="測試按鈕" style="success" />
    <Button title="測試按鈕" style="warning" />
    <Button title="測試按鈕" style="danger" />
`;

  return (
    <div className="flex-column ai-center w-full basic-bg">
      <span style={{ color: "white", fontSize: "1.5rem" }}>TEST</span>
      <BasicLayout
        title="測試Layout"
        components={components}
        code={codeContent}
      />
      <span style={{ color: "white", fontSize: "1rem" }}>Button</span>
      <Button title="測試按鈕" />
    </div>
  );
};

export default TestPage;
