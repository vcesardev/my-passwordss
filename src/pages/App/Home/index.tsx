import React from "react";
import { Text, View } from "react-native";
import PageHeader from "../../../components/PageHeader";
import SafeKAV from "../../../components/SafeKAV";
import { theme } from "../../../theme";
import PasswordItem from "./components/PasswordItem";
import SearchInput from "./components/SearchInput";

import * as Styled from "./styled";

const Home: React.FC = () => {
  return (
    <SafeKAV>
      <Styled.Container>
        <PageHeader />

        <SearchInput />

        <Styled.PasswordsContainer>
          <Styled.PasswordWrapper>
            <Styled.HeaderContainer>
              <Styled.HeaderLabel>Senhas</Styled.HeaderLabel>
              <Styled.PasswordsAmount>0 Senhas</Styled.PasswordsAmount>
            </Styled.HeaderContainer>

            <Styled.PasswordsDataContainer>
              <PasswordItem />
              <PasswordItem />
              <PasswordItem />
              <PasswordItem />
            </Styled.PasswordsDataContainer>
          </Styled.PasswordWrapper>
        </Styled.PasswordsContainer>

        <Styled.NewPasswordContainer>
          <Styled.AddIcon fill={theme.colors.white} />
        </Styled.NewPasswordContainer>
      </Styled.Container>
    </SafeKAV>
  );
};

export default Home;
