
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// style 
import styles from '../../styles/style'
import { useJobDescriptionContext } from '../../components/context/JobDescriptionContext';
import { actions } from '../../components/context/reducer';
import PageTitle from '../../../../components/page-title';
import MissionHeader from '../../components/header';

const CompanyTypes = () => {

  // Attributes
  const { data, dispatch } = useJobDescriptionContext()

  // Handlers
  function handleOnChange(text: any) {
    dispatch({ type: actions.companyTypesChanged, payload: text })
  }

  return (
    <>
      <MissionHeader pageName='Work environment' />
      <View style={{ flex: 8 }}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Describe the work environment you would like to work for !</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={handleOnChange} autoFocus={true} multiline={true} numberOfLines={20} style={{ outline: 'none', fontSize: 20 }} placeholder='Type here ;)))))' />
        </View>
      </View>
    </>
  )
}

export default CompanyTypes;