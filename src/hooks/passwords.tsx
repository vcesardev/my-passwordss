import React, { useState, useContext, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { BasePassword, PasswordPayload } from "../models/Password";
import { useAuth } from "./auth";

type PasswordProps = {
  passwords: BasePassword[];
  addPassword: (data: PasswordPayload) => void;
  removePassword: (data: PasswordPayload) => void;
};

type PasswordProviderProps = {
  children: React.ReactNode;
};

const PasswordsContext = createContext<PasswordProps>({} as PasswordProps);

export const PasswordProvider: React.FC<PasswordProviderProps> = ({
  children,
}) => {
  const { user } = useAuth();
  const [passwords, setPasswords] = useState<BasePassword[]>([]);

  const addPassword = async (data: PasswordPayload): Promise<void> => {
    try {
      console.log(data);
      const previousPasswords = passwords;
      const payload: BasePassword = {
        ...data,
        userId: user.id,
        id: uuidv4(),
      };
      console.log(payload);
      previousPasswords.push(payload);
      console.log(previousPasswords);
      setPasswords(previousPasswords);
    } catch (e) {
      console.log(e);
    }
  };

  const removePassword = (data: BasePassword): void => {
    const updatedPasswords = passwords.filter(
      (password) => password.id !== data.id
    );
    setPasswords(updatedPasswords);
  };

  return (
    <PasswordsContext.Provider
      value={{ passwords, addPassword, removePassword }}
    >
      {children}
    </PasswordsContext.Provider>
  );
};

export function usePasswords(): PasswordProps {
  const context = useContext(PasswordsContext);

  return context;
}
