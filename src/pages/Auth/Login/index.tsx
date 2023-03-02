import React, { useCallback, useEffect, useState, useRef } from "react";
import { View } from "react-native";
import SafeKAV from "../../../components/SafeKAV";
import LoginInput from "./components/LoginInput";
import LottieView from "lottie-react-native";

import * as Google from "expo-auth-session/providers/google";

import * as Styled from "./styled";
import axios from "axios";
import { TokenResponse } from "expo-auth-session";
import { useAuth } from "../../../hooks/auth";
import { expoClientId } from "../../../../config";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const animation = useRef(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: expoClientId,
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
            suas senhas estão aqui
          </Styled.HeaderSubheading>
        </Styled.HeaderContainer>

        <Styled.PasswordAnimation
          autoPlay
          ref={animation}
          source={require("../../../assets/animations/password-animation.json")}
        />

        <Styled.LoginHeaderContainer>
          <Styled.LoginHeaderLabel>
            Faça login com as opções abaixo para salvar as suas senhas
          </Styled.LoginHeaderLabel>
        </Styled.LoginHeaderContainer>

        <Styled.LoginButton
          onPress={() => {
            promptAsync();
          }}
        >
          <Styled.LoginButtonText>Entrar com Google</Styled.LoginButtonText>
        </Styled.LoginButton>
      </Styled.Container>
    </SafeKAV>
  );
};

export default Login;
