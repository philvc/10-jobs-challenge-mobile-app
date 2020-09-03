
// modules
import React, { useRef, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';


// styles
import styles from '../../styles/style';
import AutoFocusTextInput from '../../../../components/auto-focus-text-input';
import { useJobDescriptionContext } from '../../components/context/JobDescriptionContext';
import { actions } from '../../components/context/reducer';
import PageTitle from '../../../../components/page-title';
import MissionHeader from '../../components/header';
import NavigationFooter from '../../components/navigation-footer';

const JobTitle = () => {

  // Attributes
  const { data, dispatch } = useJobDescriptionContext()

  // Handlers
  function handleOnChange(text: any) {
    dispatch({ type: actions.jobTitleChanged, payload: text })
  }

  return (
    <>
      <MissionHeader pageName='Job key words' />
      <View style={{ flex: 8 }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Insert job title key words you are looking for :</Text>
        </View>
        <View style={styles.inputContainer}>
          <AutoFocusTextInput onChangeText={handleOnChange} autoFocus={true} multiline={true} numberOfLines={20} style={{ outline: 'none', fontSize: 20 }} placeholder='Type here ;)))))' />
        </View>
      </View>
      <NavigationFooter />
    </>
  )
}

export default JobTitle;