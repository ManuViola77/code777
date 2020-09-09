import { StyleSheet } from 'react-native';

import {
  BLACK,
  BLUE,
  BROWN,
  GREEN,
  GREY,
  PINK,
  PURPLE,
  PURPLE_DARK,
  RED,
  WHITE,
  YELLOW,
} from 'constants/colors';
import { SCREEN_WIDTH } from 'constants/common';

const differentFont = "Dan'sDisneyUI";

export const getSpecialStyle = (number, index) => {
  let color;
  switch (number) {
    case 1:
      color = GREEN;
      break;
    case 2:
      color = YELLOW;
      break;
    case 3:
      color = BLACK;
      break;
    case 4:
      color = BROWN;
      break;
    case 5:
      color = index === 4 ? BLACK : RED;
      break;
    case 6:
      color = index < 3 ? PINK : GREEN;
      break;
    case 7:
      switch (index) {
        case 4:
          color = PINK;
          break;
        case 5:
        case 6:
          color = YELLOW;
          break;
        default:
          color = BLUE;
          break;
      }
      break;
    default:
      color = BLUE;
      break;
  }
  return { color };
};

const styles = StyleSheet.create({
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
  pyramidContainer: {
    alignItems: 'center',
    backgroundColor: PURPLE_DARK,
    borderRadius: 10,
    flex: 1,
    marginBottom: 25,
    padding: 25,
    width: SCREEN_WIDTH - 40,
  },
  numberContainer: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 15,
    height: 40,
    justifyContent: 'center',
    margin: 5,
    width: 40,
  },
  have: {
    borderColor: BLACK,
    borderWidth: 5,
  },
  dontHave: {
    backgroundColor: GREY,
  },
  number: {
    fontFamily: 'AGRESSIVE',
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

export default styles;
