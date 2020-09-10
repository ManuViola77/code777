import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { func, number, string } from 'prop-types';

import styles from './styles';

const Note = ({ note, index, deleteNote }) => (
  <View style={styles.rowContainer}>
    <Text style={styles.note}>{note}</Text>
    <TouchableOpacity onPress={() => deleteNote(index)}>
      <FontAwesomeIcon icon={faTrashAlt} size={20} style={styles.trashIcon} />
    </TouchableOpacity>
  </View>
);

Note.propTypes = {
  note: string.isRequired,
  index: number.isRequired,
  deleteNote: func.isRequired,
};

export default Note;
