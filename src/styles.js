import { StyleSheet } from 'react-native';

import { PURPLE } from 'constants/colors';

const differentFont = "Dan'sDisneyUI";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: PURPLE,
    flex: 1,
    justifyContent: 'space-around',
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
  },

  inputDifferentFont: {
    fontFamily: differentFont,
  },

  textDefaultFont: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },

  textDifferentFont: {
    color: 'white',
    fontFamily: differentFont,
    fontSize: 72,
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default styles;
