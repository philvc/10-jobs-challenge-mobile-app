// modules
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageTitle from '../../components/page-title';
import MissionCard from './components/mission-card';
import PageContainer from '../../components/page-container';
import PageBody from '../../components/page-body';
import HomeHeader from '../../components/home-header';
import { tryShare } from './utils';
import { useQuery } from '@apollo/client';
import { GET_MOBILE_MISSIONS } from '../../graphql/queries/client/getMobileMissions';

const Dashboard = () => {

  // Attributes
  const challenge = JSON.parse(localStorage.getItem('selectedChallenge') || '')

  // QUERY
  const { loading, data, error } = useQuery(GET_MOBILE_MISSIONS, {
    variables: {
      gameId: '5f6aec9716c90440435d6e44'
    }
  })


  // Handlers
  function handleShare() {
    tryShare(
      'Join and help me on my job quest',
      'Je fais appel à toi pour chercher un nouveau taf',
      `http://localhost:19006/join/${challenge.id}`
    )
  }

  if (loading) return null

  const { missionsMobile } = data

  return (
    <PageContainer>
      <HomeHeader icon='challenges'>
        <PageTitle text={'Dashboard'} />
      </HomeHeader>
      <PageBody>
        <View style={styles.dashboardBodyContainer}>
          {missionsMobile.map((mission: any) => {
            return <MissionCard mission={mission} />
          })}
        </View>
        <View style={styles.shareButton}>
          <TouchableOpacity onPress={handleShare}>
            <Text>Share your quest</Text>
          </TouchableOpacity>
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
  },
  shareButton: {
    textAlign: 'center',
  }
})

export default Dashboard;