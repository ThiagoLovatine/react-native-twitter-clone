import React from 'react';
import {KeyboardAvoidingView} from 'react-native';

export default function KeyboardAvoid(props) {
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
      {props.children}
    </KeyboardAvoidingView>
  );
}
