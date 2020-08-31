// modules
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageTitle from '../../components/page-title';
import MissionCard from './components/mission-card';

const Dashboard = () => {

  // Attributes
  const navigation = useNavigation()

  // Handlers
  function handleOnPress(screen: string) {
    navigation.navigate(screen)
  }


  return (
    <View style={styles.dashboardContainer}>
      <Image
        style={styles.challengeListIcon}
        source={require('./assets/challenges-list-icon.svg')}
      />
      <PageTitle text={'DASHBOARD'} />
      <View style={styles.dashboardBodyContainer}>
        <MissionCard mission={{ type: 'jobdescription', isLock: false }} />
        <MissionCard mission={{ type: '3jobs', isLock: true }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dashboardContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    position: "relative"

  },
  dashboardBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  challengeListIcon: {
    width: 15,
    height: 15,
    position: 'absolute',
    transform: 'translateY(50%)',
  }
})

export default Dashboard;