import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { FlatList, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import PageHeader from "../../../components/PageHeader";
import { useAuth } from "../../../hooks/auth";
import { usePasswords } from "../../../hooks/passwords";
import { BasePassword } from "../../../models/Password";
import { theme } from "../../../theme";
import DisplayPasswordModal from "./components/DisplayPasswordModal";
import PasswordItem from "./components/PasswordItem";
import SearchInput from "./components/SearchInput";

import * as Styled from "./styled";

const Home: React.FC = () => {
  const inputRef = React.createRef<TextInput>();

  const [displayPassword, setDisplayPassword] = useState(false);
  const [passwordData, setPasswordData] = useState<BasePassword>(
    {} as BasePassword
  );
  const { passwords, removePassword, deletePasswords, loadUserPasswords } =
    usePasswords();
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  const [searchText, setSearchText] = useState<string>("");

  const handleModalDisplay = (): void => {
    // setPasswordModalVisible(!passwordModalVisible);
    navigate("AddPassword");
  };

  const handleDisplayPasswordModal = (): void => {
    setDisplayPassword(!displayPassword);
  };

  const filteredUserPasswords = passwords.filter((password) =>
    password.label.includes(searchText)
  );

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
    deletePasswords();
    signOut();
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

  const handleInputPress = (): void => {
    inputRef?.current?.focus();
  };

  useFocusEffect(
    useCallback(() => {
      loadUserPasswords();
    }, [])
  );

  return (
    <Styled.Container>
      <PageHeader onPressLogout={handleToggleLogout} />

      <SearchInput
        onChangeText={setSearchText}
        value={searchText}
        innerRef={inputRef}
        onPressInput={handleInputPress}

        //onPressSearch={handleSearchPress}
      />

      <Styled.PasswordsContainer>
        <Styled.PasswordWrapper>
          <Styled.HeaderContainer>
            <Styled.HeaderLabel>Senhas</Styled.HeaderLabel>
            <Styled.PasswordsAmount>
              {searchText ? filteredUserPasswords.length : passwords.length}{" "}
              Senhas
            </Styled.PasswordsAmount>
          </Styled.HeaderContainer>

          <Styled.PasswordsDataContainer>
            <FlatList
              data={searchText ? filteredUserPasswords : passwords}
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
      {displayPassword && displayPasswordModal()}
    </Styled.Container>
  );
};

export default Home;
