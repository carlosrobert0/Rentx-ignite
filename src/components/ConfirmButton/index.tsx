import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

export function ConfirmButton({
  title,
  color,
  ...rest
}: Props){
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}