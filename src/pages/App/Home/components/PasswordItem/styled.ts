import styled from "styled-components/native";

import TrashSVG from "../../../../../assets/icons/trash.svg";
import PasswordSVG from "../../../../../assets/icons/password-icon.svg";

import TextH1 from "../../../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${widthPercentageToDP("4%")}px;
  justify-content: space-between;
  padding: ${heightPercentageToDP("2%")}px;
  margin-bottom: ${heightPercentageToDP("2%")}px;
  margin-right: ${widthPercentageToDP("10%")}px;
  width: 44%;
`;

export const Label = styled(TextH1)`
  color: ${({ theme }) => theme.colors.base};
  font-size: ${fontScale(16)}px;
`;

export const TrashIcon = styled(TrashSVG)``;

export const PasswordIcon = styled(PasswordSVG).attrs({
  width: widthPercentageToDP("12%"),
})``;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DeleteTouchable = styled.TouchableOpacity.attrs(() => ({
  hitSlop: {
    top: heightPercentageToDP("2%"),
    bottom: heightPercentageToDP("2%"),
    left: widthPercentageToDP("4%"),
    right: widthPercentageToDP("4%"),
  },
}))``;
