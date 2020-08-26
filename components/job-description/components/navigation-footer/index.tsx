// modules
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// components
import { useJobDescriptionContext } from '../context/JobDescriptionContext';
import { actions } from '../context/reducer';

// style
import { useNavigation } from '@react-navigation/native';

const NavigationFooter = () => {

  // Attributes
  const { data, dispatch } = useJobDescriptionContext()
  const { step } = data;
  const navigation = useNavigation()

  const enumRoute = ['JobTitle', 'CompanyTypes', 'WishList']
  // Handlers
  function handleOnPress(value: number) {
    if (value >= 0) {

      dispatch({ type: actions.stepChanged, payload: value })
    }
    console.log('value step', value)
    navigation.navigate('JobDescription', { screen: enumRoute[value] })
  }
  return (
    <View style={styles.container}>
      {step !== 0 ? (
        <TouchableOpacity style={styles.navigationButton} onPress={() => handleOnPress(step - 1)}>
          <Text>Back</Text>
        </TouchableOpacity>
      ) : (
          <View></View>
        )
      }
      <TouchableOpacity style={styles.navigationButton} onPress={() => handleOnPress(step + 1)}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navigationButton: {
    boxSizing: 'border-box',
    paddingRight: 30,
    paddingLeft: 30

  }
})

export default NavigationFooter;