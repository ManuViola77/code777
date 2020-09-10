import { StyleSheet } from 'react-native';

import { PURPLE, WHITE } from 'constants/colors';

const differentFont = "Dan'sDisneyUI";

const commonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: PURPLE,
    flex: 1,
  },

  title: {
    color: WHITE,
    fontFamily: differentFont,
    fontSize: 72,
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default commonStyles;
