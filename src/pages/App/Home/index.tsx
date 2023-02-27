import React, { useEffect, useState } from "react";
import { FlatList, Alert } from "react-native";
import PageHeader from "../../../components/PageHeader";
import SafeKAV from "../../../components/SafeKAV";
import { useAuth } from "../../../hooks/auth";
import { usePasswords } from "../../../hooks/passwords";
import { BasePassword, PasswordPayload } from "../../../models/Password";
import { theme } from "../../../theme";
import DisplayPasswordModal from "./components/DisplayPasswordModal";
import NewPasswordModal from "./components/NewPasswordModal";
import PasswordItem from "./components/PasswordItem";
import SearchInput from "./components/SearchInput";

import * as Styled from "./styled";

const Home: React.FC = () => {
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);
  const [passwordData, setPasswordData] = useState<BasePassword>(
    {} as BasePassword
  );
  const { passwords, addPassword, removePassword, deletePasswords } =
    usePasswords();
  const { user, signOut } = useAuth();

  const [searchText, setSearchText] = useState<string>("");

  const handleModalDisplay = (): void => {
    setPasswordModalVisible(!passwordModalVisible);
  };

  const handleDisplayPasswordModal = (): void => {
    setDisplayPassword(!displayPassword);
  };

  const userPasswords = passwords.filter(
    (password) => password.userId === user.id
  );

  const filteredUserPasswords = userPasswords.filter((password) =>
    password.label.includes(searchText)
  );

  const handleFormData = async (data: PasswordPayload): Promise<void> => {
    try {
      addPassword(data);
      handleModalDisplay();
    } catch (e) {
      return;
    }
  };

  const showPasswordModal = (): JSX.Element => {
    return (
      <NewPasswordModal
        isVisible={passwordModalVisible}
        onRequestClose={handleModalDisplay}
        onSendFormData={handleFormData}
      />
    );
  };

  const handlePasswordInfo = (data: BasePassword) => {
    handleDisplayPasswordModal();
    setPasswordData(data);
  };

  const displayPasswordModal = (): JSX.Element => {
    return (
      <DisplayPasswordModal
        isVisible={displayPassword}
        data={passwordData}
        onRequestClose={handleDisplayPasswordModal}
      />
    );
  };

  const handleToggleDelete = (data: BasePassword): void => {
    Alert.alert("Deletar senha", "Você gostaria de deletar esta senha?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => handleDeletePassword(data) },
    ]);
  };

  const handleLogout = (): void => {
    signOut();
    deletePasswords();
  };

  const handleToggleLogout = (): void => {
    Alert.alert(
      "Logout",
      "Gostaria de fazer o logout? Todas as senhas salvas serão removidas!",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => handleLogout() },
      ]
    );
  };

  const handleDeletePassword = (data: BasePassword): void => {
    removePassword(data);
  };

  return (
    <SafeKAV>
      <Styled.Container>
        <PageHeader onPressLogout={handleToggleLogout} />

        <SearchInput
          onChangeText={setSearchText}
          value={searchText}
          //onPressSearch={handleSearchPress}
        />

        <Styled.PasswordsContainer>
          <Styled.PasswordWrapper>
            <Styled.HeaderContainer>
              <Styled.HeaderLabel>Senhas</Styled.HeaderLabel>
              <Styled.PasswordsAmount>
                {searchText
                  ? filteredUserPasswords.length
                  : userPasswords.length}{" "}
                Senhas
              </Styled.PasswordsAmount>
            </Styled.HeaderContainer>

            <Styled.PasswordsDataContainer>
              <FlatList
                data={searchText ? filteredUserPasswords : userPasswords}
                renderItem={({ item }) => (
                  <PasswordItem
                    onPressItem={() => handlePasswordInfo(item)}
                    onPressDelete={() => handleToggleDelete(item)}
                    data={item}
                  />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
              />
            </Styled.PasswordsDataContainer>
          </Styled.PasswordWrapper>
        </Styled.PasswordsContainer>

        <Styled.NewPasswordContainer onPress={handleModalDisplay}>
          <Styled.AddIcon fill={theme.colors.white} />
        </Styled.NewPasswordContainer>
      </Styled.Container>
      {passwordModalVisible && showPasswordModal()}
      {displayPassword && displayPasswordModal()}
    </SafeKAV>
  );
};

export default Home;
