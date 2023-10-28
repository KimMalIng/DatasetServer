type UserSchemaType = {
  everyTimeToken: string;
  id: string;
  password: string;
  token: string;
};

type TimelineSchemaType = {
  semester: number | string;
  year: number;
  timelineToken: string;
  userToken: string;
};

type TimelineSubjectSchemaType = {
  day: number;
  endTime: string;
  startTime: string;
  name: string;
  timelineToken: string;
  type: 'const' | 'variable';
};

export { UserSchemaType, TimelineSchemaType, TimelineSubjectSchemaType };
