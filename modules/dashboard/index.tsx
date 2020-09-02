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

  function handleGoToChallenges() {
    console.log('handle press')
    navigation.navigate('challenges')
  }


  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.menuHeader} >
        <View style={{ flex: 2 }}>
          <TouchableOpacity onPress={handleGoToChallenges}>
            <Image
              source={require('./assets/challenges-list-icon.svg')}
              style={styles.challengeListIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 7, transform: [{ translateX: '-10%' }] }}>
          <PageTitle text={'DASHBOARD'} />
        </View>
      </View>
      <View style={styles.dashboardBodyContainer}>
        <MissionCard mission={{ type: 'jobdescription', isLock: false }} />
        <MissionCard mission={{ type: '3jobs', isLock: true }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  dashboardContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    position: "relative",

  },
  dashboardBodyContainer: {
    paddingVertical: 15,
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
  }
})

export default Dashboard;