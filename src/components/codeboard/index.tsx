import React from "react";
import { Highlight, themes } from "prism-react-renderer";

interface Props {
  code: string;
  language?: string;
}

const CodeBoard: React.FC<Props> = ({ code, language = "tsx" }) => {
  return (
    <div className="codeboard">
      <Highlight theme={themes.jettwaveDark} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="font-style">
                {/* <span>{i + 1}</span> */}
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token })}
                    className="font-style"
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBoard;