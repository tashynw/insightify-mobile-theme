/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {config} from '@gluestack-ui/config';
import {Box, GluestackUIProvider, ScrollView} from '@gluestack-ui/themed';
import React from 'react';
import {Dimensions, SafeAreaView, StatusBar} from 'react-native';
import HomePage from './pages/Home';
import BottomNavigationBar from './components/BottomNavigationBar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import MessagesPage from './pages/Messages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Messages" component={MessagesPage} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <BottomNavigationBar /> */}
    </GluestackUIProvider>
  );
}

export default App;
