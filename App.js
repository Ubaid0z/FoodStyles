import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './src/navigation/authNavigator';
import LoadingView from './src/ui/elements/LoadingView';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
      <LoadingView />
    </SafeAreaView>
  );
};
export default App;
