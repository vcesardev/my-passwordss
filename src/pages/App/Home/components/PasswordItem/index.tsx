import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";

import * as Styled from "./styled";

const PasswordItem: React.FC = () => {
  const theme = useTheme();
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.PasswordIcon fill={theme.colors.inputs} />
        <TouchableOpacity>
          <Styled.TrashIcon />
        </TouchableOpacity>
      </Styled.HeaderContainer>

      <Styled.Label>Santander</Styled.Label>
    </Styled.Container>
  );
};

export default PasswordItem;
