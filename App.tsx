import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// components
import Login from './components/login';
import ChallengesList from './components/challenges-list'
import Challenge from './components/challenge';
import JobDescription from './components/job-description';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

const Stack = createStackNavigator()

export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='JobDescription' headerMode="none">
          <Stack.Screen
            name='Challenges'
            component={ChallengesList}
            options={{ title: undefined }}
          />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Challenge' component={Challenge} />
          <Stack.Screen name='JobDescription' component={JobDescription} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
