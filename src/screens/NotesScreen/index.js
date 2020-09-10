import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import Note from 'components/Note';
import Title from 'components/Title';
import commonStyles from 'constants/styles';
import styles from './styles';

const NotesScreen = () => {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!!text) {
      setNotes([...notes, text]);
      setText('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((item, index) => index !== id));
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Title />
      <View style={styles.rowContainer}>
        <TextInput value={text} onChangeText={setText} style={styles.textInput} />
        <TouchableOpacity onPress={addNote}>
          <FontAwesomeIcon icon={faPlusCircle} size={50} style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.notesContainer}>
        <FlatList
          //contentContainerStyle={styles.notesList}
          data={notes}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, index }) => (
            <Note note={item} index={index} deleteNote={deleteNote} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotesScreen;
