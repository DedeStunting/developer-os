import type { SecurityTopic } from "@developer-os/types";

export interface SecurityChecklistProps {
  topics: SecurityTopic[];
}

export function SecurityChecklist({ topics }: SecurityChecklistProps) {
  if (topics.length === 0) {
    return null;
  }

  return (
    <ul className="grid gap-4">
      {topics.map((topic) => (
        <li key={topic.topic} className="border-border bg-background-subtle rounded-xl border p-5">
          <h3 className="text-foreground text-sm font-semibold">{topic.topic}</h3>
          <p className="text-foreground-secondary mt-2 text-sm leading-relaxed">{topic.approach}</p>
        </li>
      ))}
    </ul>
  );
}
