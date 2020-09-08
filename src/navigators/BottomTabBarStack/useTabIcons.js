import React from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { NOTES_SCREEN, NUMBER_PYRAMID_SCREEN, SCORE_SCREEN } from 'constants/screens';
import { faHome, faHighlighter, faStar, faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

const getTabIconAndStyle = (name, focused) => {
  switch (name) {
    case NOTES_SCREEN:
      return { icon: faThList };
    case NUMBER_PYRAMID_SCREEN:
      return { icon: faHighlighter };
    case SCORE_SCREEN:
      return { icon: faStar };
    default:
      return { icon: faHome };
  }
};

export const renderIcon = (name, focused) => {
  const { icon } = getTabIconAndStyle(name, focused);

  return (
    <View style={styles.iconStyle}>
      <FontAwesomeIcon
        icon={icon}
        size={25}
        style={[styles.commonIconStyle, focused && styles.focusedIconStyle]}
      />
    </View>
  );
};
