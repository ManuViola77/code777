import React from 'react';
import { Text } from 'react-native';
import { string } from 'prop-types';

import { BLACK, BLUE, BROWN, GREEN, PINK, PURPLE_DARK, RED, YELLOW } from 'constants/colors';
import {
  ALL_COLORS,
  BLACK_NAME,
  BLUE_NAME,
  BROWN_NAME,
  GREEN_NAME,
  PINK_NAME,
  RED_NAME,
  WHITE,
  YELLOW_NAME,
} from 'constants/colorsNames';
import styles from './styles';

const HighlightedText = ({ text }) => {
  const words = text.split(' ');

  const getColor = (word) => {
    let color = PURPLE_DARK;

    if (BLACK_NAME.includes(word)) color = BLACK;
    if (BLUE_NAME.includes(word)) color = BLUE;
    if (BROWN_NAME.includes(word)) color = BROWN;
    if (GREEN_NAME.includes(word)) color = GREEN;
    if (PINK_NAME.includes(word)) color = PINK;
    if (RED_NAME.includes(word)) color = RED;
    if (YELLOW_NAME.includes(word)) color = YELLOW;

    return color;
  };

  return (
    <Text>
      {words.map((word) => {
        const lowerCaseWord = word.toLowerCase();

        return (
          <Text
            style={[
              styles.text,
              ALL_COLORS.includes(lowerCaseWord) && { color: getColor(lowerCaseWord) },
            ]}>
            {word}{' '}
          </Text>
        );
      })}
    </Text>
  );
};

export default HighlightedText;

HighlightedText.propTypes = {
  text: string.isRequired,
};
