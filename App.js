/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import AppNavContainer from './src/navigations';


const App = () => {
  return (
    <SafeAreaView>
      <AppNavContainer />
    </SafeAreaView>
  );
};


export default App;
