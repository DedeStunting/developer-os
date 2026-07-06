import type { SecurityTopic } from "@developer-os/types";

export interface SecurityChecklistProps {
  topics: SecurityTopic[];
}

export function SecurityChecklist({ topics }: SecurityChecklistProps) {
  if (topics.length === 0) {
    return null;
  }

  return (
    <ul className="project-list mt-4">
      {topics.map((topic) => (
        <li key={topic.topic} className="project-list-item">
          <h3 className="text-foreground text-sm font-semibold sm:text-[15px]">{topic.topic}</h3>
          <p className="text-foreground-secondary mt-2 text-sm leading-relaxed sm:text-[15px]">
            {topic.approach}
          </p>
        </li>
      ))}
    </ul>
  );
}
