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

  title: {
    color: 'white',
    fontFamily: differentFont,
    fontSize: 72,
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default styles;
