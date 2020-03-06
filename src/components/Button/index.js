import React from 'react';
import {Container, ButtonBox, Text, CustomIcon} from './styles';
import Spinner from '../Spinner';
import colors from '../../constants/colors';

export default function Button(props) {
  return (
    <Container>
      <ButtonBox
        style={{
          ...props.buttonStyle,
          backgroundColor: props.active ? colors.primary : colors.primaryShadow,
        }}
        styleButton={props.style}
        onPress={() => {
          if (!props.loading && props.onPress && props.active) {
            props.onPress();
          }
        }}>
        {props.loading && <Spinner color="white" size={20} />}
        {!props.loading && props.icon && (
          <CustomIcon
            style={props.style}
            name={props.icon}
            solid={props.solid ? true : false}
            regular={props.regular ? true : false}
            light={props.light ? true : false}
            brand={props.brand ? true : false}
            size={props.size ? props.size : 16}
          />
        )}
        {!props.loading && (
          <Text style={props.textStyle} styleText={props.style}>
            {props.text}
          </Text>
        )}
      </ButtonBox>
    </Container>
  );
}
