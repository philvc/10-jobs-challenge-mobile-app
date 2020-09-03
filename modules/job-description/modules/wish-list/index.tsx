
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// style 
import styles from '../../styles/style'
import { useJobDescriptionContext } from '../../components/context/JobDescriptionContext';
import { actions } from '../../components/context/reducer';
import PageTitle from '../../../../components/page-title';

const WishList = () => {

  // Attributes
  const { data, dispatch } = useJobDescriptionContext()

  // Handlers
  function handleOnChange(text: any) {
    dispatch({ type: actions.wishListChanged, payload: text })
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Do you already know some companies you would like to work for ?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleOnChange} autoFocus={true} multiline={true} numberOfLines={20} style={{ outline: 'none', fontSize: 20 }} placeholder='Type here ;)))))' />
      </View>
    </View>
  )
}

export default WishList;