
// modules
import React, { useRef, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';


// styles
import styles from '../../styles/style';
import AutoFocusTextInput from '../../../../components/auto-focus-text-input';
import { useJobDescriptionContext } from '../../components/context/JobDescriptionContext';
import { actions } from '../../components/context/reducer';
import PageTitle from '../../../../components/page-title';

const JobTitle = () => {

  // Attributes
  const { data, dispatch } = useJobDescriptionContext()

  // Handlers
  function handleOnChange(text: any) {
    dispatch({ type: actions.jobTitleChanged, payload: text })
  }

  return (
    <View style={styles.pageContainer}>
      <PageTitle text={'JOBS KEY WORDS'} />
      <View style={styles.title}>
        <Text>Type a list of jobs you are looking for :</Text>
      </View>
      <View style={styles.inputContainer}>
        <AutoFocusTextInput onChangeText={handleOnChange} autoFocus={true} multiline={true} numberOfLines={20} style={{ outline: 'none', fontSize: 20 }} placeholder='Type here ;)))))' />
      </View>
    </View>
  )
}

export default JobTitle;