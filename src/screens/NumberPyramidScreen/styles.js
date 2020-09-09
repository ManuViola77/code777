import { StyleSheet } from 'react-native';

import { CANARY, PURPLE, PURPLE_DARK } from 'constants/colors';
import { SCREEN_WIDTH } from 'constants/common';

const differentFont = "Dan'sDisneyUI";

export const getSpecialStyle = (number, index) => {
  let color;
  switch (number) {
    case 1:
      color = 'green';
      break;
    case 2:
      color = 'yellow';
      break;
    case 3:
      color = 'black';
      break;
    case 4:
      color = 'brown';
      break;
    case 5:
      color = index === 4 ? 'black' : 'red';
      break;
    case 6:
      color = index < 3 ? 'pink' : 'green';
      break;
    case 7:
      switch (index) {
        case 4:
          color = 'pink';
          break;
        case 5:
        case 6:
          color = 'yellow';
          break;
        default:
          color = 'blue';
          break;
      }
      break;
    default:
      color = 'blue';
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
    color: 'white',
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
    backgroundColor: 'white',
    borderRadius: 15,
    height: 40,
    justifyContent: 'center',
    margin: 5,
    width: 40,
  },
  have: {
    borderColor: 'black',
    borderWidth: 3,
  },
  dontHave: {
    backgroundColor: 'grey',
  },
  number: {
    fontSize: 20,
    fontWeight: '600',
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

export default styles;
