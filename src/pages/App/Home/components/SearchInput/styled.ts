import styled from "styled-components/native";

import SearchSVG from "../../../../../assets/icons/search.svg";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../../utils";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.purple};
  padding-bottom: ${heightPercentageToDP("9%")}px;
`;

export const SearchInputContainer = styled.View`
  align-items: center;
  align-self: center;
  border-radius: ${widthPercentageToDP("20%")}px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  padding: ${heightPercentageToDP("1%")}px ${widthPercentageToDP("7%")}px;
  flex-direction: row;
  width: 90%;
`;

export const SearchIcon = styled(SearchSVG)``;

export const SearchInput = styled.TextInput``;
