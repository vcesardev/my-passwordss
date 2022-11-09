import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  UIManager,
  LayoutAnimation,
  Platform,
} from "react-native";
import { heightPercentageToDP } from "../../../../../utils";

import * as Styled from "./styled";

const LoginInput: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const handleInputFocus = (): void => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setIsFocused(!isFocused);
  };

  return (
    <Styled.Container onPress={handleInputFocus}>
      <Styled.InputLabel isFocused={isFocused}>Email</Styled.InputLabel>
      {isFocused ? <Styled.Input /> : <></>}
    </Styled.Container>
  );
};

export default LoginInput;
