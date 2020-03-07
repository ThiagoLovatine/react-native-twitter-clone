import React from 'react';
import {Container} from './styles';

export default function Row(props) {
  return <Container style={props.style}>{props.children}</Container>;
}
