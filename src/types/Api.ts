export type OnErrorType = (error: ApiError) => void;

export type ApiError = {
  status?: number;
  message: string;
};

export type ApiPostOptions = {
  endpoint: string;
  body: unknown;
  token?: string;
  onError?: OnErrorType;
};
