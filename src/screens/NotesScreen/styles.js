import { StyleSheet } from 'react-native';

import { PURPLE, PURPLE_DARK, WHITE } from 'constants/colors';
import { SCREEN_WIDTH } from 'constants/common';

const styles = StyleSheet.create({
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    backgroundColor: WHITE,
    borderRadius: 25,
    color: PURPLE,
    flex: 1,
    fontSize: 16,
    height: 50,
    marginRight: 10,
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
  plusIcon: {
    color: WHITE,
  },
  notesContainer: {
    backgroundColor: WHITE,
    borderRadius: 10,
    flex: 1,
    marginBottom: 25,
    paddingVertical: 20,
    width: SCREEN_WIDTH - 40,
  },
});

export default styles;
