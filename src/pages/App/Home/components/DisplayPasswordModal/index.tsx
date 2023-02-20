import React, { useState, useEffect } from "react";
import { Modal, TouchableOpacity, Alert } from "react-native";
import { BasePassword, PasswordPayload } from "../../../../../models/Password";

import * as LocalAuthenticate from "expo-local-authentication";

import * as Styled from "./styled";

type PasswordModalProps = {
  onRequestClose: () => void;
  isVisible: boolean;
  data: BasePassword;
};

const DisplayPasswordModal: React.FC<PasswordModalProps> = ({
  isVisible,
  onRequestClose,
  data,
}) => {
  const [loading, setLoading] = useState(true);

  const displayErrorAuthentication = () =>
    Alert.alert(
      "Erro ao autenticar",
      "Não foi possível autenticar o usuário, tente novamente em breve."
    );

  const handleDisplayData = async (): Promise<void> => {
    try {
      const response = await LocalAuthenticate.authenticateAsync({
        promptMessage: "Confirme sua identidade!",
      });
      if (response.success === true) {
        setLoading(false);
      } else {
        displayErrorAuthentication();
        onRequestClose();
      }
    } catch (e) {}
  };

  useEffect(() => {
    handleDisplayData();
  }, []);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}
    >
      <Styled.ModalContainer>
        <Styled.ModalBackground onPressIn={onRequestClose} />
        <Styled.ContainerData>
          {loading ? (
            <Styled.LoaderContainer>
              <Styled.Loader />
            </Styled.LoaderContainer>
          ) : (
            <>
              <Styled.CloseTouchable onPress={onRequestClose}>
                <Styled.CloseIcon onPress={onRequestClose} />
              </Styled.CloseTouchable>

              <Styled.HeaderLabel>Sua Senha</Styled.HeaderLabel>

              <Styled.InputLabel>Nome do campo</Styled.InputLabel>
              <Styled.Input value={data.label} editable={false} />

              <Styled.InputLabel>Informações</Styled.InputLabel>
              <Styled.DescriptionInput
                value={data.description}
                editable={false}
              />
            </>
          )}
        </Styled.ContainerData>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default DisplayPasswordModal;
