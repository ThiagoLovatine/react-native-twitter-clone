import React from 'react';
import {Container, Text} from './styles';

export default function Link(props) {
  return (
    <Container
      onPress={() => {
        props.onPress && props.onPress();
      }}>
      <Text>{props.text || 'Type here'}</Text>
    </Container>
  );
}
