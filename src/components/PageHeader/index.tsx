import React from "react";
import { View } from "react-native";
import { useAuth } from "../../hooks/auth";

import * as Styled from "./styled";

type HeaderProps = {
  onPressLogout: () => void;
};

const PageHeader: React.FC<HeaderProps> = ({ onPressLogout }) => {
  const { user } = useAuth();

  return (
    <Styled.Container>
      <Styled.LogoText>
        my{<Styled.DotText>.</Styled.DotText>}passwords
      </Styled.LogoText>

      <Styled.LogoutTouchable onPress={onPressLogout}>
        <Styled.LogoutIcon />
      </Styled.LogoutTouchable>
    </Styled.Container>
  );
};

export default PageHeader;
