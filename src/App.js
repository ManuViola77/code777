import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';

import Navigation from 'navigators';

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
    <>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </>
  );
};

export default App;
