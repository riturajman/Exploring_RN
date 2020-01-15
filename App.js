import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {combineReducers} from 'redux'

//Exploring device features with this app

export default function App() {

  console.log('listening on port')
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
