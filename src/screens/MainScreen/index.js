import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

const MainScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>MY APP</Text>
  </SafeAreaView>
);

export default MainScreen;
