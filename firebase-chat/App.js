import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MApp from './src/App';
export default class App extends React.Component {
  render() {
    return (
      <MApp />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
