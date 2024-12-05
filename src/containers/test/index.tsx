import React from "react";
import BasicLayout from "../../components/basicLayout";
import Button from "../../components/button";

const TestPage: React.FC = () => {
  const components = [
    <button>按鈕1</button>,
    <button>按鈕2</button>,
    <button>按鈕3</button>,
    <button>按鈕4</button>,
    <button>按鈕5</button>,
  ];

  const codeContent = `
    <button>按鈕1</button>
    <button>按鈕2</button>
    <button>按鈕3</button>
    <button>按鈕4</button>
    <button>按鈕5</button>
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
