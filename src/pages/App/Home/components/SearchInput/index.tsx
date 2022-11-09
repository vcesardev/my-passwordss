import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";

import * as Styled from "./styled";

const SearchInput: React.FC = () => {
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.SearchInputContainer>
        <Styled.SearchInput
          placeholder="Busque uma senha"
          placeholderTextColor={theme.colors.inputs}
        />

        <Styled.SearchIcon fill={theme.colors.inputs} />
      </Styled.SearchInputContainer>
    </Styled.Container>
  );
};

export default SearchInput;
