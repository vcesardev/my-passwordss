import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { BasePassword } from "../../../../../models/Password";

import * as Styled from "./styled";

type PasswordItemProps = {
  onPressItem: (data: BasePassword) => void;
  onPressDelete: (data: BasePassword) => void;
  data: BasePassword;
};

const PasswordItem: React.FC<PasswordItemProps> = ({
  onPressItem,
  data,
  onPressDelete,
}) => {
  const theme = useTheme();
  return (
    <Styled.Container onPress={() => onPressItem(data)}>
      <Styled.HeaderContainer>
        <Styled.PasswordIcon fill={theme.colors.inputs} />
        <TouchableOpacity onPress={() => onPressDelete(data)}>
          <Styled.TrashIcon />
        </TouchableOpacity>
      </Styled.HeaderContainer>

      <Styled.Label>{data.label}</Styled.Label>
    </Styled.Container>
  );
};

export default PasswordItem;
