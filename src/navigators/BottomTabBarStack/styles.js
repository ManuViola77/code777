import { StyleSheet } from 'react-native';
import { CANARY, PURPLE, PURPLE_DARK, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  commonIconStyle: {
    backgroundColor: PURPLE,
    color: WHITE,
  },
  focusedIconStyle: {
    backgroundColor: PURPLE_DARK,
    color: CANARY,
  },
  iconStyle: {
    flex: 1,
    paddingTop: 15,
  },
});

export default styles;
