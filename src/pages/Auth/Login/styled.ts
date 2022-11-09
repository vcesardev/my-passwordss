import styled from "styled-components/native";
import TextH1 from "../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils";

export const Container = styled.View``;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple};
  height: 35%;
`;

export const HeaderTitle = styled(TextH1)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${fontScale(20)}px;
`;

export const HeaderTitleOrange = styled(HeaderTitle)`
  color: ${({ theme }) => theme.colors.pink};
`;

export const HeaderSubheading = styled(TextH1)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  margin-top: ${heightPercentageToDP("2%")}px;
`;

export const LoginHeaderContainer = styled.View`
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${heightPercentageToDP("4%")}px;
  width: 90%;
`;

export const LoginHeaderLabel = styled(TextH1)`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${fontScale(18)}px;
`;

export const CreateAccountText = styled(TextH1)`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  color: ${({ theme }) => theme.colors.purple};
`;

export const InputsContainer = styled.View`
  margin-top: ${heightPercentageToDP("2%")}px;
`;

export const LoginButton = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  border-radius: ${widthPercentageToDP("3%")}px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: ${heightPercentageToDP("2%")}px 0;
  margin-top: ${heightPercentageToDP("8%")}px;
  width: 70%;
`;

export const LoginButtonText = styled(TextH1)`
  color: ${({ theme }) => theme.colors.white};
`;
