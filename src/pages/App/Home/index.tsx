import React, { useState } from "react";
import { FlatList } from "react-native";
import PageHeader from "../../../components/PageHeader";
import SafeKAV from "../../../components/SafeKAV";
import { useAuth } from "../../../hooks/auth";
import { usePasswords } from "../../../hooks/passwords";
import { BasePassword, PasswordPayload } from "../../../models/Password";
import { theme } from "../../../theme";
import NewPasswordModal from "./components/NewPasswordModal";
import PasswordItem from "./components/PasswordItem";
import SearchInput from "./components/SearchInput";

import * as Styled from "./styled";

const Home: React.FC = () => {
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const { passwords, addPassword } = usePasswords();
  const { user } = useAuth();

  const handleModalDisplay = (): void => {
    setPasswordModalVisible(!passwordModalVisible);
  };

  const handleFormData = async (data: PasswordPayload): Promise<void> => {
    try {
      addPassword(data);
      handleModalDisplay();
    } catch (e) {
      return;
    }
  };

  const showPasswordModal: React.FC = () => {
    return (
      <NewPasswordModal
        isVisible={passwordModalVisible}
        onRequestClose={handleModalDisplay}
        onSendFormData={handleFormData}
      />
    );
  };

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
              <FlatList
                data={passwords?.filter((password) => password.id !== user.id)}
                renderItem={(item) => <PasswordItem />}
                keyExtractor={(item) => item.id}
              />
            </Styled.PasswordsDataContainer>
          </Styled.PasswordWrapper>
        </Styled.PasswordsContainer>

        <Styled.NewPasswordContainer onPress={handleModalDisplay}>
          <Styled.AddIcon fill={theme.colors.white} />
        </Styled.NewPasswordContainer>
      </Styled.Container>
      {passwordModalVisible && showPasswordModal()}
    </SafeKAV>
  );
};

export default Home;
