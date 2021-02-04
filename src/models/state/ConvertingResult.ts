export interface ConvertingResult {
  documents: string[];
  messages: string[];
  status:
    | "CONVERTED_SUCCESS"
    | "CONVERTED_PARTIALLY"
    | "CONVERTING_FAIL"
    | "CLIENT_FAIL"
    | "UNKNOWN";
}
