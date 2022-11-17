import styled from "styled-components/native";
import { Animated } from "react-native";

import TextH1 from "../../../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";

type LoginInputProps = {
  isFocused: boolean;
};

type LoginContainerProps = {
  multiline: boolean;
};

export const Container = styled.TouchableOpacity<LoginContainerProps>`
  align-self: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: ${widthPercentageToDP("3%")}px;
  padding: 0 ${widthPercentageToDP("5%")}px;
  width: 90%;
  height: ${({ multiline }) =>
    heightPercentageToDP(multiline ? "15%" : "9%")}px;
`;

export const InputLabel = styled(Animated.Text)<LoginInputProps>`
  color: ${({ theme }) => theme.colors.details};
  font-size: ${({ isFocused }) =>
    isFocused ? `${fontScale(12)}px` : `${fontScale(14)}px`};
`;

export const Input = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
`;
