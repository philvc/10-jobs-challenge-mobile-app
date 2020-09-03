import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  icon: string
}

const NavigationIcon = ({ icon }: Props) => {

  // Attributes
  const navigation = useNavigation()

  // Handlers
  function handleOnClick() {
    navigation.navigate(icon)
  }

  return (
    <>
      <TouchableOpacity onPress={handleOnClick}>
        <Image style={styles.icon} source={require(`./assets/${icon}.svg`)} />
      </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  icon: {
    height: 15,
    width: 15,
  },
})
export default NavigationIcon;