import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// components
import Login from './modules/login';
import ChallengesList from './modules/challenges-list'
import Challenge from './modules/challenge';
import JobDescription from './modules/job-description';
import Dashboard from './modules/dashboard';
import Congratulation from './components/congratulation';
import MissionIntro from './modules/mission-intro';
import ThreeJobOffers from './modules/three-job-offers';
import { GET_GAMES_CLIENT_MOBILE } from './graphql/queries/client/getGamesClient';
import NewChallenge from './modules/new-challenge';
import Join from './modules/join';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

client.writeQuery({
  query: GET_GAMES_CLIENT_MOBILE,
  data: {
    gamesMobile: JSON.parse(localStorage.getItem('games') || '[]'),
  }
})


const Stack = createStackNavigator()

export default function App() {
  // TODO react router navigation
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='dashboard' headerMode="none">
          <Stack.Screen
            name='challenges'
            component={ChallengesList}
            options={{ title: undefined }}
          />
          <Stack.Screen name='newchallenge' component={NewChallenge} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='dashboard' component={Dashboard} />
          <Stack.Screen name='challenge' component={Challenge} />
          <Stack.Screen name='jobdescription' component={JobDescription} />
          <Stack.Screen name='congratulation' component={Congratulation} />
          <Stack.Screen name='threejoboffers' component={ThreeJobOffers} />
          <Stack.Screen name='join' component={Join} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
