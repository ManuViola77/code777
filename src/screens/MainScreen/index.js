import React from 'react';
import { SafeAreaView } from 'react-native';

import Title from 'components/Title';
import commonStyles from 'constants/styles';

const MainScreen = () => (
  <SafeAreaView style={commonStyles.container}>
    <Title />
  </SafeAreaView>
);

export default MainScreen;
