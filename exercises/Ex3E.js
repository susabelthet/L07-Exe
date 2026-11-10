// Week 4 Exercise 3E – justifyContent
// Uncomment ONE justifyContent line at a time to get each of the 4 screenshots.
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',       // 1st screenshot: all at the top
    // justifyContent: 'flex-end',      // 2nd screenshot: all at the bottom
    // justifyContent: 'space-around',  // 3rd screenshot: space before, between, after
    // justifyContent: 'space-between', // 4th screenshot: first at top, last at bottom
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
  },
  child: {
    // no flex here, otherwise children fill all the space
    // and justifyContent has nothing to spread out
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  },
});
