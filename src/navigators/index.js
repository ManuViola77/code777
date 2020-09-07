import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MAIN_SCREEN } from 'constants/screens';
import { navigationRef } from 'helpers/navigator';
import MainScreen from 'screens/MainScreen';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={MainScreen} name={MAIN_SCREEN} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
