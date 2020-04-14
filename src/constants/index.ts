export interface ActivityPeriods {
  start_time: string;
  end_time: string;
}

export interface User {
  id: number;
  real_name: string;
  tz: string;
  activity_periods: ActivityPeriods[];
}
