// modules
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MissionCard = ({ mission }: any) => {

  // Attributes
  const navigation = useNavigation()

  // Handlers
  function handleOnPress() {
    const routeName = getMissionRoute()
    navigation.navigate(routeName)
  }

  // utils
  function getMissionRoute() {
    switch (mission.type) {
      case "jobdescription":
        return 'jobdescription'
      case "joboffers":
        return 'joboffers';
      default:
        return 'dashboard'
    }
  }



  return (

    <View style={styles.dashboardItem}>
      <Image style={styles.dashboardItemIcon} source={require(`../../assets/lock${mission.isLocked ? '' : '-unlock'}.svg`)} />
      <TouchableOpacity onPress={() => handleOnPress()}>
        <Text style={styles.dashboardItemText}>{mission.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  dashboardItem: {
    width: 100,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    borderWidth: 1,
    padding: 15,
    position: 'relative',
  },
  dashboardItemIcon: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: -11,
    right: 0
  },
  dashboardItemText: {
    textAlign: 'center',
  },
})

export default MissionCard;