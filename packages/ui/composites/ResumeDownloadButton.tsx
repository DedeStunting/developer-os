import { Download } from "lucide-react";

import { ButtonLink } from "../primitives/ButtonLink";

export interface ResumeDownloadButtonProps {
  href?: string;
}

export function ResumeDownloadButton({ href = "/resume.pdf" }: ResumeDownloadButtonProps) {
  return (
    <ButtonLink href={href} size="md" className="inline-flex items-center gap-2">
      <Download className="h-4 w-4" aria-hidden />
      Download PDF
    </ButtonLink>
  );
}
