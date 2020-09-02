// modules
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MissionCard = ({ mission }: any) => {

  // Attributes
  const navigation = useNavigation()

  // Handlers
  function handleOnPress() {
    navigation.navigate('missionintro')
  }

  // utils
  function getMissionName() {
    switch (mission.type) {
      case 'jobdescription':
        return missionNameEnum[0]
      case '3jobs':
        return missionNameEnum[1]
    }
  }
  const missionNameEnum = ['Mission 1', 'Mission 2']



  return (

    <View style={styles.dashboardItem}>
      <Image style={styles.dashboardItemIcon} source={require(`../../assets/lock${mission.isLock ? '' : '-unlock'}.svg`)} />
      <TouchableOpacity onPress={() => handleOnPress()}>
        <Text style={styles.dashboardItemText}>{getMissionName()}</Text>
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
    margin: 20,
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