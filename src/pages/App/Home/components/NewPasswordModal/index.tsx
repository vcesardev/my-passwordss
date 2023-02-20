import React, { useState } from "react";
import { Modal } from "react-native";
import { PasswordPayload } from "../../../../../models/Password";

import * as Styled from "./styled";

type PasswordModalProps = {
  onRequestClose: () => void;
  isVisible: boolean;
  onSendFormData: (data: PasswordPayload) => void;
};

const NewPasswordModal: React.FC<PasswordModalProps> = ({
  isVisible,
  onRequestClose,
  onSendFormData,
}) => {
  const [label, setLabel] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleFormData = (): void => {
    if (label.length < 1 || description.length < 1) {
      return;
    }

    onSendFormData({ description: description, label: label });
  };

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
          <Styled.CloseTouchable onPress={onRequestClose}>
            <Styled.CloseIcon onPress={onRequestClose} />
          </Styled.CloseTouchable>

          <Styled.HeaderLabel>Adicione uma nova senha</Styled.HeaderLabel>

          <Styled.InputLabel>Nome do campo</Styled.InputLabel>
          <Styled.Input value={label} onChangeText={setLabel} />

          <Styled.InputLabel>Informações</Styled.InputLabel>
          <Styled.DescriptionInput
            value={description}
            onChangeText={setDescription}
          />

          <Styled.AddButton onPress={handleFormData}>
            <Styled.ButtonText>Adicionar</Styled.ButtonText>
          </Styled.AddButton>
        </Styled.ContainerData>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default NewPasswordModal;
