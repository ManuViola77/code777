import { StyleSheet } from 'react-native';

import { CANARY, PURPLE } from 'constants/colors';
import { SCREEN_WIDTH } from 'constants/common';

const differentFont = "Dan'sDisneyUI";

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
    backgroundColor: CANARY,
    borderRadius: 10,
    flex: 1,
    marginBottom: 25,
    padding: 25,
    width: SCREEN_WIDTH - 40,
  },
  numberContainer: {
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 15,
    height: 40,
    justifyContent: 'center',
    margin: 5,
    width: 40,
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
