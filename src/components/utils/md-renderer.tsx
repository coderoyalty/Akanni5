import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MDRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MDRendererProps> = ({ content }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-center mb-2" {...props} />
        ),

        p: ({ node, ...props }) => <p {...props} />,
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownRenderer;
