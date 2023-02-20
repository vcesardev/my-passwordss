import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import * as Styled from "./styled";

type SearchInputProps = TextInputProps & {};

const SearchInput: React.FC<SearchInputProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Styled.Container>
      <Styled.SearchInputContainer>
        <Styled.SearchInput
          placeholder="Busque uma senha"
          placeholderTextColor={theme.colors.inputs}
          {...props}
        />

        <Styled.SearchIcon fill={theme.colors.inputs} />
      </Styled.SearchInputContainer>
    </Styled.Container>
  );
};

export default SearchInput;
