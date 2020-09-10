import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/colors';
import { SCREEN_WIDTH } from 'constants/common';

const styles = StyleSheet.create({
  rowContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  note: {
    color: WHITE,
    flex: 1,
    fontSize: 14,
    paddingRight: 15,
  },
  trashIcon: {
    color: WHITE,
  },
});

export default styles;
