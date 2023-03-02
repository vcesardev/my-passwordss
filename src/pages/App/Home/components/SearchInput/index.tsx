import React from "react";
import { TextInputProps, TextInput } from "react-native";
import { useTheme } from "styled-components";

import * as Styled from "./styled";

type SearchInputProps = TextInputProps & {
  innerRef: React.RefObject<TextInput>;
  onPressInput: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  innerRef,
  onPressInput,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Styled.Container onPress={onPressInput} activeOpacity={1}>
      <Styled.SearchInputContainer>
        <Styled.SearchInput
          placeholder="Busque uma senha"
          ref={innerRef}
          placeholderTextColor={theme.colors.inputs}
          {...props}
        />

        <Styled.SearchIcon fill={theme.colors.inputs} />
      </Styled.SearchInputContainer>
    </Styled.Container>
  );
};

export default SearchInput;
