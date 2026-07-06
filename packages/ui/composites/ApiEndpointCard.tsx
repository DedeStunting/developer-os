import type { ApiEndpoint } from "@developer-os/types";

export interface ApiEndpointCardProps {
  endpoint: ApiEndpoint;
}

export function ApiEndpointCard({ endpoint }: ApiEndpointCardProps) {
  return (
    <article className="border-border bg-background-subtle rounded-xl border p-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="bg-background-muted text-foreground rounded-md px-2 py-1 font-mono text-xs font-semibold">
          {endpoint.method}
        </span>
        <code className="text-foreground break-all text-sm font-medium">{endpoint.path}</code>
      </div>
      <p className="text-foreground-secondary mt-3 text-sm leading-relaxed">
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
    <div className="grid gap-4">
      {endpoints.map((endpoint) => (
        <ApiEndpointCard key={`${endpoint.method}-${endpoint.path}`} endpoint={endpoint} />
      ))}
    </div>
  );
}
