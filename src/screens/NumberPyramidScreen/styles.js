import { StyleSheet } from 'react-native';

import one from 'assets/images/one.png';
import two from 'assets/images/two.png';
import three from 'assets/images/three.png';
import four from 'assets/images/four.png';
import fiveRed from 'assets/images/fiveRed.png';
import fiveBlack from 'assets/images/fiveBlack.png';
import sixPink from 'assets/images/sixPink.png';
import sixGreen from 'assets/images/sixGreen.png';
import sevenBlue from 'assets/images/sevenBlue.png';
import sevenPink from 'assets/images/sevenPink.png';
import sevenYellow from 'assets/images/sevenYellow.png';
import {
  BLACK,
  BLUE,
  BROWN,
  GREEN,
  GREY,
  GREY_TRANSPARENT,
  PINK,
  PURPLE_DARK,
  RED,
  WHITE,
  YELLOW,
} from 'constants/colors';
import { SCREEN_WIDTH } from 'constants/common';

export const getIcon = (number, index) => {
  let icon;
  switch (number) {
    case 1:
      icon = one;
      break;
    case 2:
      icon = two;
      break;
    case 3:
      icon = three;
      break;
    case 4:
      icon = four;
      break;
    case 5:
      icon = index === 4 ? fiveBlack : fiveRed;
      break;
    case 6:
      icon = index < 3 ? sixPink : sixGreen;
      break;
    case 7:
      switch (index) {
        case 4:
          icon = sevenPink;
          break;
        case 5:
        case 6:
          icon = sevenYellow;
          break;
        default:
          icon = sevenBlue;
          break;
      }
      break;
    default:
      icon = sevenBlue;
      break;
  }
  return icon;
};

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
  pyramidContainer: {
    alignItems: 'center',
    backgroundColor: PURPLE_DARK,
    borderRadius: 10,
    flex: 1,
    marginBottom: 25,
    padding: 25,
    width: SCREEN_WIDTH - 40,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
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
  image: {
    height: 50,
    width: 40,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: GREY_TRANSPARENT,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

export default styles;
