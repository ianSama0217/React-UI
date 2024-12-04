import React from "react";
import { Highlight, themes } from "prism-react-renderer";

interface Props {
  code: string;
  language?: string;
}

const CodeBoard: React.FC<Props> = ({ code, language = "tsx" }) => {
  const copyCode = async (str: any) => {
    try {
      await navigator.clipboard.writeText(str);
      // alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="codeboard">
      <div className="copy-icon">
        <i
          className="fa-regular fa-copy"
          title="copied to clipboard"
          onClick={() => copyCode(code)}
        ></i>
      </div>

      <Highlight theme={themes.vsDark} code={code} language={language}>
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
