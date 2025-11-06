"use client";

import ReactMarkdown from "react-markdown";
import { Card, CardBody } from "@heroui/card";

interface MarkdownCellProps {
  source: string[];
}

export const MarkdownCell = ({ source }: MarkdownCellProps) => {
  const content = Array.isArray(source) ? source.join("") : source;

  return (
    <Card className="mb-4">
      <CardBody>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </CardBody>
    </Card>
  );
};

