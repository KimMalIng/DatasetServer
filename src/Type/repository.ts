type AuthRequestType = {
  id: string;
  password: string;
};

type AuthResponseType = {
  token: string;
};

export type { AuthRequestType, AuthResponseType };
