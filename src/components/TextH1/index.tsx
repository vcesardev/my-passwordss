import React from "react";
import { TextProps } from "react-native";

import * as Styled from "./styled";

type TextH1Props = TextProps & {
  children: string;
};

const TextH1: React.FC<TextH1Props> = ({ children, ...props }) => {
  return <Styled.H1 {...props}>{children}</Styled.H1>;
};

export default TextH1;
