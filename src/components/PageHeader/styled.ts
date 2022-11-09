import styled from "styled-components/native";

import LogoSVG from "../../assets/icons/Logotipo.svg";
import LogoutSVG from "../../assets/icons/Sair.svg";
import {
  heightPercentageToDP,
  widthPercentageToDP,
  fontScale,
} from "../../utils";
import TextH1 from "../TextH1";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.purple};
  flex-direction: row;
  justify-content: space-between;
  padding: ${heightPercentageToDP("3%")}px ${widthPercentageToDP("6%")}px;
`;

export const LogoText = styled(TextH1)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${fontScale(18)}px;
`;

export const DotText = styled(TextH1)`
  color: ${({ theme }) => theme.colors.pink};
  font-size: ${fontScale(19)}px;
`;

export const LogoTextContainer = styled.View`
  flex-direction: row;
`;

export const LogoutIcon = styled(LogoutSVG)``;
