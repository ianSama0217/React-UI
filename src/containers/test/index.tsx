import React from "react";
import BasicLayout from "../../components/basicLayout";

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
      <span>TEST</span>
      <BasicLayout
        title="測試Layout"
        components={components}
        code={codeContent}
      />
    </div>
  );
};

export default TestPage;
