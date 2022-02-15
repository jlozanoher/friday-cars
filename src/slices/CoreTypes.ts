export type StatusType = "idle" | "loading" | "succeeded" | "failed";

export interface CommonState {
  status: StatusType;
  error?: string;
}
