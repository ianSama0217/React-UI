import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

interface Props {
  code: string;
  language?: string;
}

const CodeBoard: React.FC<Props> = ({ code, language = "tsx" }) => {
  const [isCopy, setIsCpoy] = useState<boolean>(false);

  const copyCode = async (str: any) => {
    try {
      await navigator.clipboard.writeText(str.trim());
      setIsCpoy(true);
      setTimeout(() => {
        setIsCpoy(false);
      }, 2000);
      // alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="codeboard">
      <div className="top-bar">
        <span>{language}</span>
        <div className="copy-icon">
          {isCopy && <span>Copied!</span>}
          {isCopy ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i
              className="fa-regular fa-copy"
              title="copied to clipboard"
              onClick={() => copyCode(code)}
            ></i>
          )}
        </div>
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
