/** File model definitions **/

import { ConvertingResult } from "./ConvertingResult";

export interface ConvertingTask {
  id: string;
  file: File;
  status: "SUCCESS" | "FAILED" | "RETRY" | "INIT";
  result: ConvertingResult;
  message: string;
}

export namespace ConvertingTask {
  export enum Filter {
    SHOW_ALL = "SHOW_ALL",
    SHOW_CONVERTED = "SHOW_CONVERTED",
  }
}
