import React from 'react';

import {Container, Text} from './styles';

export default function Title(props) {
  return (
    <Container>
      <Text
        style={{
          fontSize: props.size || 20,
        }}>
        {props.text || 'Type the title here...'}
      </Text>
    </Container>
  );
}
