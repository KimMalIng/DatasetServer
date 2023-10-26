type TimelineType = {
  day: number;
  subject: SubjectType[];
};

type SubjectType = {
  endTime: string;
  startTime: string;
  name: string;
};

export type { TimelineType, SubjectType };
