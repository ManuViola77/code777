import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import styles from './styles';

const App = () => {
  const customTextProps = {
    style: {
      fontFamily: 'GoodFeelingSans',
    },
  };

  setCustomText(customTextProps);
  setCustomTextInput(customTextProps);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.textDifferentFont}>MY APP</Text>
    </SafeAreaView>
  );
};

export default App;
