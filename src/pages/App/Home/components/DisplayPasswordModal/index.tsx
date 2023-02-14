import React, { useState } from "react";
import { Modal } from "react-native";
import { BasePassword, PasswordPayload } from "../../../../../models/Password";

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
  // const [label, setLabel] = useState<string>("");
  // const [description, setDescription] = useState<string>("");

  // const handleFormData = (): void => {
  //   if (label.length < 1 || description.length < 1) {
  //     return;
  //   }

  //   onSendFormData({ description: description, label: label });
  // };
  console.log(data);

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
          <Styled.CloseIcon onPress={onRequestClose} />

          <Styled.HeaderLabel>Adicione uma nova senha</Styled.HeaderLabel>

          <Styled.InputLabel>Nome do campo</Styled.InputLabel>
          <Styled.Input value={data.label} disabled />

          <Styled.InputLabel>Informações</Styled.InputLabel>
          <Styled.DescriptionInput value={data.description} disabled />

          {/* <Styled.AddButton onPress={handleFormData}>
            <Styled.ButtonText>Adicionar</Styled.ButtonText>
          </Styled.AddButton> */}
        </Styled.ContainerData>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default DisplayPasswordModal;
