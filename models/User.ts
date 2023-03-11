export type User = {
  _id: number;
  username: string;
  password: string;
  "remaining-tasks": [];
  "memo-title": string;
  "memo-content": string;
  "completed-tasks": [];
};
