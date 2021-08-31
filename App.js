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

import AppNavContainer from './src/navigations';


const App = () => {
  return (
    <SafeAreaView>
      <Text style={{ marginTop: 200 }}>Deneme</Text>
      {/* <AppNavContainer /> */}
    </SafeAreaView>
  );
};


export default App;
