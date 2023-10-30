type UserRequestType = {
  id: string;
  password: string;
};

type CheckCredentialRequestType = {
  token: string;
};

export type { CheckCredentialRequestType, UserRequestType };
