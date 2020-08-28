// module
import React, { useReducer } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

// reducer
import { reducer, initialState, actions } from './reducer';

const NewChallengeForm = () => {

  const [state, display] = useReducer(reducer, initialState)

  function handleOnChange(payload: string, type: string) {

    display({ type, payload })
  }

  console.log('state', state)

  return (
    <View style={styles.container}>
      <View>
        <Text>Title</Text>
      </View>
      <View>
        <TextInput
          onChangeText={text => handleOnChange(text, actions.titleChanged)}
          value={state.title}
        />
      </View>
      <View>
        <View style={styles.saveButton}>
          <TouchableOpacity>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cancelButton}>
          <TouchableOpacity>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%"
  },
  modalButtons: {
    display: "flex",

  },
  cancelButton: {
  },
  saveButton: {
  },
})

export default NewChallengeForm;