import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BOTTOM_TAB_BAR_STACK, MAIN_SCREEN } from 'constants/screens';
import { navigationRef } from 'helpers/navigator';
import MainScreen from 'screens/MainScreen';
import BottomTabBarStack from './BottomTabBarStack';
import screenOptions from './styles';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen component={BottomTabBarStack} name={BOTTOM_TAB_BAR_STACK} />
      <Stack.Screen component={MainScreen} name={MAIN_SCREEN} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
