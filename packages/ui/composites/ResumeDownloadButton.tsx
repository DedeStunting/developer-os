import { resumeDownload } from "@developer-os/config/resume";
import { Download } from "lucide-react";

import { TextLink } from "../primitives/TextLink";

export interface ResumeDownloadButtonProps {
  href?: string;
}

export function ResumeDownloadButton({ href = resumeDownload.url }: ResumeDownloadButtonProps) {
  return (
    <TextLink href={href} className="gap-2 text-sm font-normal sm:text-[15px]">
      <Download className="h-3.5 w-3.5 shrink-0" aria-hidden />
      Download PDF
    </TextLink>
  );
}
