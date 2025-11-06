"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";

interface CodeCellProps {
  source: string[];
  language?: string;
  executionCount?: number | null;
}

export const CodeCell = ({
  source,
  language = "python",
  executionCount,
}: CodeCellProps) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    const content = Array.isArray(source) ? source.join("") : source;
    setCode(content);
  }, [source]);

  const highlight = (code: string) => {
    return Prism.highlight(code, Prism.languages[language] || Prism.languages.python, language);
  };

  return (
    <Card className="mb-4">
      <CardHeader className="flex gap-3">
        <Chip color="primary" variant="flat" size="sm">
          {executionCount !== null && executionCount !== undefined
            ? `[${executionCount}]`
            : "[ ]"}
        </Chip>
        <span className="text-sm text-default-500">{language}</span>
      </CardHeader>
      <CardBody>
        <div className="font-mono text-sm">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={highlight}
            padding={10}
            readOnly
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              backgroundColor: "transparent",
            }}
            textareaClassName="focus:outline-none"
          />
        </div>
      </CardBody>
    </Card>
  );
};

