import React from "react";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const TextCode = (props) => {
  return (
    <SyntaxHighlighter
      style={docco}
      showInlineLineNumbers={false}
      lineProps={{ style: { flexWrap: "wrap" } }}
      customStyle={{
        overflow: "auto",
        overflow: "hidden",
        borderRadius: 10,
        padding: 20,
        fontSize: 16,
        lineHeight: 2,
      }}
    >
      {props.code}
    </SyntaxHighlighter>
  );
};

export default TextCode;
