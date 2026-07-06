import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "../lib/cn";

export interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  if (!content.trim()) {
    return null;
  }

  return (
    <div
      className={cn(
        "text-foreground-secondary [&_code]:bg-background-muted [&_code]:text-foreground [&_h3]:text-foreground [&_pre]:bg-background-muted [&_strong]:text-foreground max-w-full space-y-4 text-[15px] leading-relaxed sm:text-base [&_code]:break-words [&_code]:rounded [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_h3]:text-base [&_h3]:font-semibold sm:[&_h3]:text-lg [&_li]:ml-5 [&_li]:list-disc [&_ol]:space-y-2 [&_p]:leading-relaxed [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_td]:break-words [&_th]:break-words [&_ul]:space-y-2",
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
