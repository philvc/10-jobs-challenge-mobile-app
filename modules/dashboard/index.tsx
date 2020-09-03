// modules
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageTitle from '../../components/page-title';
import MissionCard from './components/mission-card';
import PageContainer from '../../components/page-container';
import PageBody from '../../components/page-body';
import HomeHeader from '../../components/home-header';

const Dashboard = () => {

  // Attributes


  // Handlers

  return (
    <PageContainer>
      <HomeHeader icon='challenges'>
        <PageTitle text={'Dashboard'} />
      </HomeHeader>
      <PageBody>
        <View style={styles.dashboardBodyContainer}>
          <MissionCard mission={{ type: 'jobdescription', isLock: false }} />
          <MissionCard mission={{ type: '3jobs', isLock: true }} />
        </View>
      </PageBody>
    </PageContainer>
  )
}

const styles = StyleSheet.create({
  dashboardBodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  challengeListIcon: {
    width: 15,
    height: 15,
  }
})

export default Dashboard;