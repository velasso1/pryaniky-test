export interface IAuthInfo {
  token: string;
  authorized: boolean;
  loading: boolean;
  error: boolean;
}

export interface IBodyRequest {
  username: string;
  password: string;
}

export interface IRequestedData {
  error_code: string;
  error_message: string;
  data: {
    token: string;
  };
  profiling: string;
  timings: string;
}
