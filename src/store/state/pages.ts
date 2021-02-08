import { BaseState } from "./base";
export interface ConvertingTaskDetail {
  id: string;
  pages: string[];
  messages: string[];
  status:
    | "CONVERTED_SUCCESS"
    | "CONVERTED_PARTIALLY"
    | "CONVERTING_FAIL"
    | "CLIENT_FAIL"
    | "UNKNOWN";
}
export type PagesState = DictionaryOf<
  PartialBy<BaseState<ConvertingTaskDetail>, "data">
>;
