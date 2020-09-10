import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PURPLE, PURPLE_DARK } from 'constants/colors';
import { NOTES_SCREEN, NUMBER_PYRAMID_SCREEN, SCORE_SCREEN } from 'constants/screens';
import MainScreen from 'screens/MainScreen';
import NotesScreen from 'screens/NotesScreen';
import NumberPyramidScreen from 'screens/NumberPyramidScreen';
import { renderIcon } from './useTabIcons';

const Tab = createBottomTabNavigator();

const BottomTabBarStack = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => renderIcon(route.name, focused),
    })}
    tabBarOptions={{
      activeBackgroundColor: PURPLE_DARK,
      inactiveBackgroundColor: PURPLE,
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: PURPLE,
      },
    }}>
    <Tab.Screen component={NumberPyramidScreen} name={NUMBER_PYRAMID_SCREEN} />
    <Tab.Screen component={NotesScreen} name={NOTES_SCREEN} />
    <Tab.Screen component={MainScreen} name={SCORE_SCREEN} />
  </Tab.Navigator>
);

export default BottomTabBarStack;
