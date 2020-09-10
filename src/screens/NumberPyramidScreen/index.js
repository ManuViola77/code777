import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { times } from 'lodash';

import Title from 'components/Title';
import { DONT_HAVE, DONT_KNOW, HAVE } from 'constants/states';
import commonStyles from 'constants/styles';
import { initialState } from 'helpers/pyramidState';
import styles, { getSpecialStyle } from './styles';

const NumberPyramidScreen = () => {
  const [pyramidState, setPyramidState] = useState(initialState);

  const setNewState = (count, index, newState) => {
    setPyramidState({
      ...pyramidState,
      [count]: pyramidState[count].map((mState, mIndex) => (index === mIndex ? newState : mState)),
    });
  };

  const onLongPressNumber = (count, index, state) => {
    const newState = state !== HAVE ? HAVE : DONT_KNOW;
    setNewState(count, index, newState);
  };

  const onPressNumber = (count, index, state) => {
    const newState = state !== DONT_KNOW ? DONT_KNOW : DONT_HAVE;
    setNewState(count, index, newState);
  };

  const renderNumber = (count, index) => {
    const rowState = pyramidState[count];
    const state = rowState && rowState[index];

    return (
      <TouchableOpacity
        key={`${index}${count}`}
        onLongPress={() => onLongPressNumber(count, index, state)}
        onPress={() => onPressNumber(count, index, state)}
        style={[
          styles.numberContainer,
          state === DONT_HAVE && styles.dontHave,
          state === HAVE && styles.have,
        ]}>
        <Text style={[styles.number, getSpecialStyle(count, index)]}>{count}</Text>
      </TouchableOpacity>
    );
  };

  const renderRow = (count) => {
    const renderNumbers = () => times(count, (index) => renderNumber(count, index));

    return (
      <View key={`${count}`} style={styles.rowContainer}>
        {renderNumbers()}
      </View>
    );
  };

  const renderRows = () => times(8, (index) => renderRow(index));

  return (
    <SafeAreaView style={commonStyles.container}>
      <Title />
      <View style={styles.pyramidContainer}>{renderRows()}</View>
    </SafeAreaView>
  );
};

export default NumberPyramidScreen;
