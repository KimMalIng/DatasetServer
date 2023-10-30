
type TimelineType = {
  endTime: string;
  startTime: string;
  name: string;
}

type TranslateTimeLineType = {
  day: number;
  subject: TimelineType[];
}

type GetEveryTimeRequestType = {
  everyTimeToken: string;
}

type EveryTimeResponseType = {
  semester: number | string;
  timeline: TranslateTimeLineType[];
  year: number;
}

export type { EveryTimeResponseType, GetEveryTimeRequestType };