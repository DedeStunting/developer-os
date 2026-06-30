import type { TrustMetric } from "@developer-os/types";

export interface MetricCardProps {
  metric: TrustMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="border-border bg-background-subtle rounded-xl border p-5">
      <p className="text-foreground-muted text-sm font-medium">{metric.label}</p>
      <p className="text-foreground mt-2 text-2xl font-semibold tracking-tight">{metric.value}</p>
    </div>
  );
}

export interface MetricGridProps {
  metrics: TrustMetric[];
}

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
