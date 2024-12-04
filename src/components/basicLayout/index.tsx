import React from "react";
import CodeBoard from "../codeboard";

type Props = {
  title?: string;
  components?: Array<React.ReactNode>;
  code: string;
  language?: string;
};

const BasicLayouy: React.FC<Props> = ({
  title,
  components = [],
  code,
  language = "tsx",
}) => {
  return (
    <div className="basic-layout flex-column ai-center">
      <span className="m5 title">{title}</span>
      <div>
        <div className="components-bar flex-row jc-space-around ai-center mb-1 p5">
          {components.map((Component, index) => (
            <div key={index}>{Component}</div>
          ))}
        </div>
        <CodeBoard code={code} language={language} />
      </div>
    </div>
  );
};

export default BasicLayouy;
