import styled from "styled-components/native";
import { SafeAreaView as SAV } from "react-native-safe-area-context";

import { Platform } from "react-native";

const SafeArea = styled(SAV)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
const KAV = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
`;

export const SafeKAVStyled = { KAV, SafeArea };
