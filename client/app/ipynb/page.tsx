"use client";

import { NotebookRenderer } from "@/components/notebook/NotebookRenderer";
import { ChatBox } from "@/components/chat/ChatBox";

export default function NotebookPage() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left side - Notebook Viewer (scrollable) */}
        <div className="w-full">
          <NotebookRenderer notebookPath="/sample.ipynb" />
        </div>
        
        {/* Right side - Chat Box (sticky) */}
        <div className="w-full">
          <div className="sticky top-20 h-[calc(100vh-8rem)]">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}

