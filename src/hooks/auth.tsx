import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { TokenResponse } from "expo-auth-session";
import { User } from "../models/User";
import * as LocalAuthenticate from "expo-local-authentication";

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

  const signOut = (): void => {
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
