import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { times } from 'lodash';

import styles from './styles';

const NumberPyramidScreen = () => {
  const renderNumber = (count) => (
    <TouchableOpacity style={styles.numberContainer}>
      <Text style={styles.number}>{count}</Text>
    </TouchableOpacity>
  );

  const renderRow = (count) => {
    const renderNumbers = () => times(count, () => renderNumber(count));

    return <View style={styles.rowContainer}>{renderNumbers()}</View>;
  };

  const renderRows = () => times(8, (index) => renderRow(index));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CODE 777</Text>
      <View style={styles.pyramidContainer}>{renderRows()}</View>
    </SafeAreaView>
  );
};

export default NumberPyramidScreen;
