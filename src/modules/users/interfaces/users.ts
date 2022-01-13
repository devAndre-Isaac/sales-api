import User from '../typeorm/entities/User';

export interface IResponse {
  user: User;
  token: string;
}

export interface IRequest {
  name: string;
  email: string;
  password: string;
}

export interface IPaginateCustomer {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: User[];
}

export interface IRequestResetPass {
  token: string;
  password: string;
}

export interface IRequestSendForgot {
  email: string;
}

export interface IRequestShowProfile {
  user_id: string;
}

export interface IRequestUpdate {
  user_id: string;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

export interface IRequestUpdateAvatar {
  user_id: string;
  avatarFilename: string;
}
