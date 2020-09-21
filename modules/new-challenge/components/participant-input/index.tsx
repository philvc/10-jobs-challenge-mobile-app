import { View, Text, StyleSheet, TouchableOpacity, TextInput, TextInputProps } from 'react-native';
import React, { useReducer, useState, useRef, useEffect } from 'react';

interface IProps extends TextInputProps {
  isFocused: boolean;
}

const ParticipantInput = (props: IProps) => {

  const ref = useRef<TextInput>(null)


  useEffect(() => {
    if (props.isFocused && ref.current) {
      ref.current.focus()
    }
  }, [props.isFocused])

  return (
    <View>
      <TextInput ref={ref} {...props} />
    </View>
  )
}

export default ParticipantInput;