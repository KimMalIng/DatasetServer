type EveryTimeSubjectType = {
  endTime: string;
  startTime: string;
  name: string;
};

type EveryTimeTimelineType = {
  day: number;
  subject: EveryTimeSubjectType[];
};

type TimelineType = {
  day: number;
  subject: SubjectType[];
};

type SubjectType = EveryTimeSubjectType & {
  type: 'const' | 'variable';
};

type EveryTimeType = {
  semester: number | string;
  timeline: EveryTimeTimelineType[];
  year: number;
};
// 안에서만 사용

type AuthRequestType = {
  id: string;
  password: string;
};

type AuthResponseType = {
  token: string;
};

type CreateDatasetRequestType = {
  semester: number | string;
  token: string;
  year: number;
};

type CreateDatasetResponseType = {
  token: string;
  timeline: TimelineType[];
};

type GetCategoryResponseType = {
  semester: number | string;
  year: number;
};

type GetEveryTimeResponseType = {
  timeline: EveryTimeType[];
};

export type {
  AuthRequestType,
  AuthResponseType,
  CreateDatasetRequestType,
  CreateDatasetResponseType,
  GetCategoryResponseType,
  GetEveryTimeResponseType,
};
