import styled from "styled-components/native";
import TextH1 from "../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils";

import AddSVG from "../../../assets/icons/add-icon.svg";

export const Container = styled.View`
  flex: 1;
`;

export const PasswordsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  top: ${heightPercentageToDP("-2%")}px;
  border-top-left-radius: ${widthPercentageToDP("5%")}px;
  border-top-right-radius: ${widthPercentageToDP("5%")}px;
  flex: 1;
`;

export const PasswordWrapper = styled.View`
  align-self: center;
  flex: 1;
  width: 90%;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${heightPercentageToDP("3%")}px;
`;

export const HeaderLabel = styled(TextH1)`
  font-family: ${({ theme }) => theme.fonts.secondary.regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${fontScale(17)}px;
`;

export const PasswordsDataContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
})`
  margin-top: ${heightPercentageToDP("3%")}px;
`;

export const PasswordsAmount = styled(TextH1)`
  color: ${({ theme }) => theme.colors.details};
  font-size: ${fontScale(14)}px;
`;

export const NewPasswordContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: ${widthPercentageToDP("20%")}px;
  position: absolute;
  bottom: ${heightPercentageToDP("5%")}px;
  right: ${widthPercentageToDP("6%")}px;
  padding: ${widthPercentageToDP("3%")}px;
`;

export const AddIcon = styled(AddSVG)``;
