export type BasePassword = {
  id: string;
  label: string;
  description: string;
  userId: string;
};

export type PasswordPayload = {
  label: string;
  description: string;
};
