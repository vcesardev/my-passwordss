import React from "react";
import { View } from "react-native";

import * as Styled from "./styled";

const PageHeader: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.LogoText>
        my{<Styled.DotText>.</Styled.DotText>}passwords
      </Styled.LogoText>

      <Styled.LogoutIcon />
    </Styled.Container>
  );
};

export default PageHeader;
