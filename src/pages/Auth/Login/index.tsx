import React from "react";
import { View } from "react-native";
import SafeKAV from "../../../components/SafeKAV";
import LoginInput from "./components/LoginInput";

import * as Styled from "./styled";

const Login: React.FC = () => {
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

        <Styled.LoginButton>
          <Styled.LoginButtonText>Entrar</Styled.LoginButtonText>
        </Styled.LoginButton>
      </Styled.Container>
    </SafeKAV>
  );
};

export default Login;
