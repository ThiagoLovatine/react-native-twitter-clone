import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import colors from '../../constants/colors';

export const Container = styled.View`
  padding: 12px 0px 12px 0px;
`;

export const Label = styled.Text`
  position: absolute;
  top: 20px;
  left: 12px;
  color: ${colors.grey1};
  font-size: 14px;
`;

export const MaskInput = styled(TextInputMask)``;

export const TextInput = styled.TextInput`
  border: 2px solid ${colors.grey1};
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  padding: 28px 60px 12px 12px;
  align-self: stretch;
  font-size: 16px;
  background-color: ${colors.grey3};
`;
