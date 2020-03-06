import styled from 'styled-components/native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

function textColor(style) {
  switch (style) {
    case 'clear': {
      return colors.grey1;
    }
    case 'secondary': {
      return colors.primary;
    }
    case 'transparent': {
      return 'black';
    }
    default: {
      return 'white';
    }
  }
}

function iconColor(style) {
  switch (style) {
    case 'clear': {
      return colors.grey1;
    }
    case 'secondary': {
      return colors.primary;
    }
    case 'transparent': {
      return 'black';
    }
    default: {
      return 'black';
    }
  }
}

function buttonColor(style) {
  switch (style) {
    case 'clear': {
      return 'white';
    }
    case 'secondary': {
      return colors.primaryShadow;
    }
    case 'transparent': {
      return 'transparent';
    }
    default: {
      return colors.primary;
    }
  }
}

function buttonBorderColor(style) {
  switch (style) {
    case 'clear': {
      return 'white';
    }
    case 'secondary': {
      return colors.primaryShadow;
    }
    case 'transparent': {
      return 'white';
    }
    default: {
      return colors.primary;
    }
  }
}

export const Container = styled.View`
  margin: 10px 0px 0px 0px;
  align-self: stretch;
`;

export const ButtonBox = styled.TouchableOpacity`
  padding: 20px 20px;
  align-self: stretch;
  background-color: ${props => buttonColor(props.styleButton)};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${props => textColor(props.styleText)};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const CustomIcon = styled(Icon)`
  color: ${props => iconColor(props.style)};
  margin-right: 10;
`;
