export type BaseState<T> = {
  data: T;
  loading: boolean;
  error: boolean;
  initialized?: boolean;
};
