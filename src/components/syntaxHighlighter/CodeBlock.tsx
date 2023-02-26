import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Props = {
  codeString: string;
  language?: string;
};

const CodeBlock: FC<Props> = (props) => {
  const { codeString, language = "htmlbars" } = props;

  return (
    <SyntaxHighlighter
      language={language}
      style={monokaiSublime}
      className="rounded-md !p-4"
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
