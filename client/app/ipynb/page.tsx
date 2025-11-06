"use client";

import { NotebookRenderer } from "@/components/notebook/NotebookRenderer";
import { ChatBox } from "@/components/chat/ChatBox";

export default function NotebookPage() {
  return (
    <div className="w-full h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        {/* Left side - Notebook Viewer */}
        <div className="h-full">
          <NotebookRenderer notebookPath="/sample.ipynb" />
        </div>
        
        {/* Right side - Chat Box */}
        <div className="h-full">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

