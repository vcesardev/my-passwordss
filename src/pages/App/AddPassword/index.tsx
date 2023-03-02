import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SafeKAV from "../../../components/SafeKAV";
import { usePasswords } from "../../../hooks/passwords";

import * as Styled from "./styled";

const AddPassword: React.FC = () => {
  const { goBack } = useNavigation();
  const { addPassword } = usePasswords();

  const [label, setLabel] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleFormData = async (): Promise<void> => {
    if (label.length < 1 || description.length < 1) {
      return;
    }
    try {
      addPassword({ description: description, label: label });
      goBack();
    } catch (e) {
      return;
    }
  };

  return (
    <SafeKAV>
      <Styled.ModalContainer>
        <Styled.ScrollViewContainer>
          <Styled.ContainerData>
            <Styled.HeaderContainer>
              <TouchableOpacity onPress={goBack}>
                <Styled.BackIcon />
              </TouchableOpacity>

              <Styled.HeaderLabel>Nova Senha</Styled.HeaderLabel>
              <View />
            </Styled.HeaderContainer>

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
        </Styled.ScrollViewContainer>
      </Styled.ModalContainer>
    </SafeKAV>
  );
};

export default AddPassword;
