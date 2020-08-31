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

  const enumRoute = ['JobTitle', 'CompanyTypes', 'WishList', 'Congratulation']

  // Handlers
  function handleOnPress(value: number) {

    if (value >= 0 && value < 3) {

      dispatch({ type: actions.stepChanged, payload: value })
    }
    navigation.navigate('jobdescription', { screen: enumRoute[value] })

  }
  console.log('step', step)
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
      {step === 2 ? (
        <TouchableOpacity>
          <Text style={styles.saveButtonText}>Save Mission</Text>
        </TouchableOpacity>
      ) :
        (
          <TouchableOpacity style={styles.navigationButton} onPress={() => handleOnPress(step + 1)}>
            <Text>Next</Text>
          </TouchableOpacity>
        )
      }
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

  },
  saveButtonContainer: {


  },
  saveButtonText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 10,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: 16,
    padding: 15,
    boxSizing: 'border-box',
    marginRight: 5,
  }
})

export default NavigationFooter;