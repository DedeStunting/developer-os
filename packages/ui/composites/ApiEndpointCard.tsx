import type { ApiEndpoint } from "@developer-os/types";

export interface ApiEndpointCardProps {
  endpoint: ApiEndpoint;
}

export function ApiEndpointCard({ endpoint }: ApiEndpointCardProps) {
  return (
    <article className="project-list-item">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="text-foreground-muted font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
          {endpoint.method}
        </span>
        <code className="text-foreground break-all text-sm font-medium sm:text-[15px]">
          {endpoint.path}
        </code>
      </div>
      <p className="text-foreground-secondary mt-2 text-sm leading-relaxed sm:text-[15px]">
        {endpoint.description}
      </p>
    </article>
  );
}

export interface ApiEndpointListProps {
  endpoints: ApiEndpoint[];
}

export function ApiEndpointList({ endpoints }: ApiEndpointListProps) {
  if (endpoints.length === 0) {
    return null;
  }

  return (
    <ul className="project-list mt-4">
      {endpoints.map((endpoint) => (
        <li key={`${endpoint.method}-${endpoint.path}`}>
          <ApiEndpointCard endpoint={endpoint} />
        </li>
      ))}
    </ul>
  );
}
