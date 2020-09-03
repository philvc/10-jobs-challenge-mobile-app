import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// context
import { useJobDescriptionContext } from '../../modules/job-description/components/context/JobDescriptionContext';
import { useNavigation } from '@react-navigation/native';
import NavigationIcon from '../navigation-icon';

interface Props {
  children?: any,
  icon: string,
}

const HomeHeader = ({ children, icon }: Props) => {


  // Attritubes
  const navigation = useNavigation()

  // Handlers
  function handleOnClick() {
    navigation.navigate(icon)
  }

  return (
    <View style={styles.container}>
      <View style={styles.homeIconContainer}>
        <NavigationIcon icon={icon} />
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
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeIconContainer: {
    flex: 2,
  },
  children: {
    flex: 7,
    transform: [{ translateX: '-10%' }]
  }

})

export default HomeHeader;