export type TUserLogin = {
  username: string;
  password: string;
};

export type TUser = {
  id: number;
  username: string;
  rank: Rank;
  experience: number;
  groups: any[];
};

export type Rank = {
  id: number;
  title: string;
  min_score: number;
  max_score: number;
};

export type TUserVkStatus = {
  code: string;
  state: string;
};
