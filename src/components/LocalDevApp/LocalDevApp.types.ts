export type LoginData = {
  InitialBranch: string;
};

export type LoginRootObject = {
  login: LoginData;
};

export type LoginType = {
  data: LoginRootObject;
};
