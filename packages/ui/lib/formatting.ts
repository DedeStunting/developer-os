export function formatExperienceDate(date: string | null): string {
  if (!date) {
    return "Present";
  }

  const [year, month] = date.split("-");

  if (!year || !month) {
    return date;
  }

  const formatter = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });
  return formatter.format(new Date(Number(year), Number(month) - 1));
}

export function formatExperienceRange(start: string, end: string | null): string {
  return `${formatExperienceDate(start)} — ${formatExperienceDate(end)}`;
}
