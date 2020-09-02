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

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

const Stack = createStackNavigator()

export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='jobdescription' headerMode="none">
          <Stack.Screen
            name='challenges'
            component={ChallengesList}
            options={{ title: undefined }}
          />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='dashboard' component={Dashboard} />
          <Stack.Screen name='challenge' component={Challenge} />
          <Stack.Screen name='jobdescription' component={JobDescription} />
          <Stack.Screen name='congratulation' component={Congratulation} />
          <Stack.Screen name='missionintro' component={MissionIntro} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
