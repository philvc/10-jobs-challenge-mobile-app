import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// context
import { useJobDescriptionContext } from '../../modules/job-description/components/context/JobDescriptionContext';
import { useNavigation } from '@react-navigation/native';



const HomeHeader = ({ children }: any) => {


  // Attritubes
  const navigation = useNavigation()

  // Handlers
  function handleOnClick() {
    console.log('onclick')
    navigation.navigate('dashboard')
  }

  return (
    <View style={styles.container}>
      <View style={styles.homeIconContainer}>
        <TouchableOpacity onPress={handleOnClick}>
          <Image
            source={require('./assets/home-icon.svg')}
            style={styles.homeIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.children}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIconContainer: {
    flex: 2,
  },
  homeIcon: {
    height: 15,
    width: 15,
  },
  children: {
    flex: 7,
    transform: [{ translateX: '-10%' }]
  }

})

export default HomeHeader;