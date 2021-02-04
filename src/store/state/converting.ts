import { ConvertingTask } from "../../models/state/ConvertingTask";

export interface ConvertingState {
  data: ConvertingTask[];
  loading: boolean;
  error: string | null;
}
