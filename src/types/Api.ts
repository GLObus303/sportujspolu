export type ApiError = {
  status?: number;
  message: string;
};

export type ApiPostOptions = {
  endpoint: string;
  body: unknown;
  token?: string;
  onError?: (error: ApiError) => void;
};
