export interface DateType {
  day: number;
  month: { long: string; short: string; numeric: number };
  year: number;
  hour: number;
  minute: number;
  second: number;
  weekday: { long: string; short: string };
}

export interface optionType {
  weekday: "long" | "short" | undefined;
  year: "numeric";
  month: "long" | "short" | "numeric";
  day: "numeric";
  hour: "numeric" | undefined;
  minute: "numeric" | undefined;
  second: "numeric" | undefined;
  dayPeriod: "short" | "long" | undefined;
  timezone: "default" | "UTC" | "en-US" | undefined;
  timezoneName: "short" | "long" | undefined;
}

export type monthType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type daysInAMonthType = (
  month: monthType,
  year: number
) => { count: number; start: number };

export type getDateType = (d?: Date, timezone?: string) => DateType;
