
// modules
import React, { useRef, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

// styles
import styles from '../../styles/style';

const JobTitle = () => {


  return (
    <View style={styles.pageContainer}>
      <View style={styles.title}>
        <Text>Type a list of jobs you are looking for :</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput autoFocus={true} multiline={true} numberOfLines={20} style={{ outline: 'none', fontSize: 20 }} placeholder='Type here ;)))))' />
      </View>
    </View>
  )
}

export default JobTitle;