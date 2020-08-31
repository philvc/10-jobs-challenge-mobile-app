import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// context
import { useJobDescriptionContext } from '../context/JobDescriptionContext';
import { useNavigation } from '@react-navigation/native';



const Header = () => {


  // Attritubes
  const { data, dispatch } = useJobDescriptionContext()
  const navigation = useNavigation()

  // Handlers
  function handleOnClick() {
    navigation.navigate('dashboard')
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleOnClick} style={styles.homeButton}>
          <Image
            source={require('../../assets/home-icon.svg')}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
        <Text> {data.step + 1} / 3 </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65px'
  },
  homeIcon: {
    height: 14,
    width: 14,
  },
  homeButton: {
    position: 'absolute',
    left: 35,
  }
})

export default Header;