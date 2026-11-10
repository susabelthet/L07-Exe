// Week 4 Exercise 3D – inline flex ratio 1 : 2 : 3
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.parent}>
      <Text style={[styles.child, { backgroundColor: 'powderblue', flex: 1 }]}>Child One</Text>
      <Text style={[styles.child, { backgroundColor: 'skyblue', flex: 2 }]}>Child Two</Text>
      <Text style={[styles.child, { backgroundColor: 'steelblue', flex: 3 }]}>Child Three</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row', // back to row, no flex: 1 so it stays a short bar
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
  },
  child: {
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  },
});
