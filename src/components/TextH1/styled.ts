import styled from "styled-components/native";
import { fontScale } from "../../utils";

export const H1 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${fontScale(14)}px;
`;
