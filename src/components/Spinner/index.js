import React from 'react';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import colors from '../../constants/colors';

export default function Spinner(props) {
  return (
    <BarIndicator
      color={props.color || colors.primary}
      size={props.size || 40}
    />
  );
}
