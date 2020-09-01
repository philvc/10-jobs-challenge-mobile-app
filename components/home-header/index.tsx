import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// context
import { useJobDescriptionContext } from '../../modules/job-description/components/context/JobDescriptionContext';
import { useNavigation } from '@react-navigation/native';



const HomeHeader = ({ children }: any) => {


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
            source={require('./assets/home-icon.svg')}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
        {children}
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

export default HomeHeader;