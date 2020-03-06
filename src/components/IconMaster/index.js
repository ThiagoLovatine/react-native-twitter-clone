import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
 
export default function IconMaster(props) {
  return (
    <Icon
      solid
      style={props.style}
      name={props.name}
      size={props.size}
      color={props.color}
      onPress={
        props.onPress
          ? () => {
              props.onPress();
            }
          : () => {}
      }
    />
  );
}
