import { StyleSheet } from 'react-native';

import { PURPLE_DARK } from 'constants/colors';

const styles = StyleSheet.create({
  rowContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  trashIcon: {
    color: PURPLE_DARK,
  },
});

export default styles;
