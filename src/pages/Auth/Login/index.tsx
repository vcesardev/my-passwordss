import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import SafeKAV from "../../../components/SafeKAV";
import LoginInput from "./components/LoginInput";

import * as Google from "expo-auth-session/providers/google";

import * as Styled from "./styled";
import axios from "axios";
import { TokenResponse } from "expo-auth-session";
import { useAuth } from "../../../hooks/auth";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "573714968934-9s4k2n1hr7tg2vud7jrq5mrqa6nhk69m.apps.googleusercontent.com",
    // iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    // androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    // webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    //scopes: encodeURI("profile email"),
  });

  const [tokenResponse, setTokenResponse] = useState();

  const handleAccessToken = async (
    authenticationData: TokenResponse
  ): Promise<void> => {
    try {
      signIn(authenticationData);
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication) {
        handleAccessToken(authentication);
      }
    }
  }, [response]);

  return (
    <SafeKAV>
      <Styled.Container>
        <Styled.HeaderContainer>
          <Styled.HeaderTitle>
            my<Styled.HeaderTitleOrange>.</Styled.HeaderTitleOrange>passwords
          </Styled.HeaderTitle>
          <Styled.HeaderSubheading>
            as suas senhas estão aqui
          </Styled.HeaderSubheading>
        </Styled.HeaderContainer>

        <Styled.LoginHeaderContainer>
          <Styled.LoginHeaderLabel>Fazer login</Styled.LoginHeaderLabel>
          <Styled.CreateAccountText>Criar uma conta</Styled.CreateAccountText>
        </Styled.LoginHeaderContainer>

        <Styled.InputsContainer>
          <LoginInput />
          <LoginInput />
        </Styled.InputsContainer>

        <Styled.LoginButton
          onPress={() => {
            promptAsync();
          }}
        >
          <Styled.LoginButtonText>Entrar</Styled.LoginButtonText>
        </Styled.LoginButton>
      </Styled.Container>
    </SafeKAV>
  );
};

export default Login;