export type TUserLogin = {
  username: string;
  password: string;
};

export interface TUser {
  id: number;
  username: string;
  start_study_date: string;
  rank: Rank;
  experience: number;
  experience_for_next_rank: number;
  groups: any[];
}

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
