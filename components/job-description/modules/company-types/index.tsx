
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// style 
import styles from '../../styles/style'

const CompanyTypes = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.title}>
        <Text>Type the work environment you would like to work for !</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput autoFocus={true} multiline={true} numberOfLines={20} style={{ outline: 'none', fontSize: 20 }} placeholder='Type here ;)))))' />
      </View>
    </View>
  )
}

export default CompanyTypes;