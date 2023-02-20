import styled from "styled-components/native";

import TextH1 from "../../../../../components/TextH1";
import {
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";
import CloseSVG from "../../../../../assets/icons/close-icon.svg";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ModalBackground = styled.TouchableOpacity`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
  flex: 1;
  width: 100%;
  opacity: 0.6;
`;

export const HeaderLabel = styled(TextH1)`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: ${fontScale(16)}px;
  margin: ${heightPercentageToDP("2%")}px 0;
`;

export const ContainerData = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${widthPercentageToDP("2%")}px;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const InputLabel = styled(TextH1)`
  margin-bottom: ${heightPercentageToDP("1%")}px;
  align-self: flex-start;
  padding: 0 ${widthPercentageToDP("10%")}px;
`;

export const Input = styled.TextInput`
  border: ${({ theme }) => `1px solid ${theme.colors.inputs}`};
  border-radius: ${widthPercentageToDP("1%")}px;
  padding: ${heightPercentageToDP("1%")}px ${widthPercentageToDP("2%")}px;
  height: ${heightPercentageToDP("7%")}px;
  margin-bottom: ${heightPercentageToDP("2%")}px;
  width: 80%;
`;

export const DescriptionInput = styled(Input)`
  height: ${heightPercentageToDP("12%")}px;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: ${widthPercentageToDP("1%")}px;
  padding: ${heightPercentageToDP("1.5%")}px ${widthPercentageToDP("6%")}px;
  margin: ${heightPercentageToDP("4%")}px 0;
`;

export const ButtonText = styled(TextH1)`
  color: ${({ theme }) => theme.colors.white};
`;

export const CloseTouchable = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const CloseIcon = styled(CloseSVG).attrs(({ theme }) => ({
  fill: theme.colors.black,
}))`
  align-self: flex-end;
  margin-top: ${heightPercentageToDP("2%")}px;
  margin-right: ${widthPercentageToDP("10%")}px;
`;
