import {Alert} from 'react-native';

export const standard = function(title, desc, buttons = []) {
  if (buttons.length > 0) {
    Alert.alert(title, desc, buttons);
  } else {
    Alert.alert(title, desc);
  }
};
const AlertHelper = {
  standard,
};
export default AlertHelper;
