/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
export default App;
