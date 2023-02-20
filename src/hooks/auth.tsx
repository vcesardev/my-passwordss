import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from "react";
import axios from "axios";
import { TokenResponse } from "expo-auth-session";
import { User } from "../models/User";
import * as LocalAuthenticate from "expo-local-authentication";
import {
  deleteUserData,
  removePasswords,
  retrieveUserData,
  storeUserData,
} from "../utils/store";

type AuthProps = {
  user: User;
  signIn: (tokenData: TokenResponse) => void;
  signOut: () => void;
  isSigned: boolean;
  loading: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<User>({} as User);

  const handleFingerprintAuthentication = async (data: User): Promise<void> => {
    try {
      const response = await LocalAuthenticate.authenticateAsync({
        promptMessage: "Confirme sua identidade!",
      });
      if (response.success) {
        await storeUserData(data);
        setUserData(data);
        setLoading(false);
      }
    } catch (err) {
      throw new Error("Erro ao autenticar com biometria.");
    }
  };

  const signIn = async (authenticationData: TokenResponse): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: "https://www.googleapis.com/oauth2/v2/userinfo",
        headers: {
          Authorization: `Bearer ${authenticationData.accessToken}`,
        },
      });
      const data: User = response.data;
      if (data) {
        handleFingerprintAuthentication(data);
      }
    } catch (err) {
      setLoading(false);
      return;
    }
  };

  const loadUserStorage = useCallback(async () => {
    try {
      setLoading(true);
      const data = await retrieveUserData();

      if (data) {
        await storeUserData(data);

        setUserData(data);
      }
    } catch (err: any) {
      console.log(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadUserStorage();
  }, [loadUserStorage]);

  const signOut = async (): Promise<void> => {
    await removePasswords();
    await deleteUserData();
    setUserData({} as User);
  };

  const isSigned = userData.id ? true : false;

  return (
    <AuthContext.Provider
      value={{ isSigned, loading, signIn, signOut, user: userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthProps {
  const context = useContext(AuthContext);

  return context;
}
