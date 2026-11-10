// Week 4 Exercise 3B – flex: 1, column, equal space
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.parent}>
      <Text style={[styles.child, { backgroundColor: 'powderblue' }]}>Child One</Text>
      <Text style={[styles.child, { backgroundColor: 'skyblue' }]}>Child Two</Text>
      <Text style={[styles.child, { backgroundColor: 'steelblue' }]}>Child Three</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,                  // parent fills the whole screen
    flexDirection: 'column',  // children top to bottom
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
  },
  child: {
    flex: 1,                  // each child gets an equal share
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  },
});
