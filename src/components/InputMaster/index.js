import React from 'react';
import {Container, MaskInput, TextInput, Label} from './styles';

export default function InputMaster(props) {
  return (
    <Container>
      <TextInput
        blurOnSubmit={false}
        style={props.inputStyle}
        placeholder={props.placeholder}
        placeholderTextColor="#999"
        secureTextEntry={props.type === 'password' ? true : false}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <Label>{props.label || 'Type here the label'}</Label>
    </Container>
  );
}
