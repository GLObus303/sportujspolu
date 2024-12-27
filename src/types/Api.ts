export type OnErrorType = (error: ApiError) => void;

type ApiError = {
  status?: number;
  message: string;
};
