import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { BasePassword, PasswordPayload } from "../models/Password";
import { retrievePasswords, storePasswords } from "../utils/store";
import { useAuth } from "./auth";

type PasswordProps = {
  passwords: BasePassword[];
  addPassword: (data: PasswordPayload) => void;
  removePassword: (data: BasePassword) => void;
  deletePasswords: () => void;
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
      const previousPasswords = passwords;
      const payload: BasePassword = {
        ...data,
        userId: user.id,
        id: uuidv4(),
      };

      previousPasswords.push(payload);

      await storePasswords(previousPasswords);

      setPasswords(previousPasswords);
    } catch (e) {
      console.log(e);
    }
  };

  const removePassword = async (data: BasePassword): Promise<void> => {
    const updatedPasswords = passwords.filter(
      (password) => password.id !== data.id
    );
    await storePasswords(updatedPasswords);
    setPasswords(updatedPasswords);
  };

  const loadUserPasswords = useCallback(async () => {
    try {
      if (!user) return;
      const data = await retrievePasswords();

      if (data) {
        //await storeUserData(data);

        setPasswords(data);
      }
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  const deletePasswords = (): void => {
    setPasswords([]);
  };

  useEffect(() => {
    loadUserPasswords();
  }, [loadUserPasswords]);

  return (
    <PasswordsContext.Provider
      value={{ passwords, addPassword, removePassword, deletePasswords }}
    >
      {children}
    </PasswordsContext.Provider>
  );
};

export function usePasswords(): PasswordProps {
  const context = useContext(PasswordsContext);

  return context;
}
