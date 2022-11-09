import React from 'react';
import { NativeSafeAreaViewProps } from 'react-native-safe-area-context';

import { SafeKAVStyled as Styled } from './styled';

const SafeKAV: React.FC<NativeSafeAreaViewProps> = ({ children, ...props }) => (
  <Styled.SafeArea edges={['top', 'left', 'right']} {...props}>
    <Styled.KAV>{children}</Styled.KAV>
  </Styled.SafeArea>
);

export default SafeKAV;
