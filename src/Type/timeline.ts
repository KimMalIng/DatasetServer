type TimelineType = {
  day: number;
  subject: SubjectType[];
};

type SubjectType = {
  endTime: string;
  startTime: string;
  name: string;
  type: 'const' | 'variable';
};

export type { TimelineType, SubjectType };
