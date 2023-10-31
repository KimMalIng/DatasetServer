type GetCategroyRequestType = {
  token: string;
};

type GetCategoryResponseType = {
  semester: number | string;
  year: number;
  timelineToken: string;
  userToken: string;
};

export type { GetCategroyRequestType, GetCategoryResponseType };