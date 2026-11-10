// Week 4 Exercise 4 – alignItems
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.parent}>
      <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
        <Text>Square 1</Text>
      </View>
      <View style={[styles.child, { backgroundColor: 'mediumaquamarine' }]}>
        <Text>Square 2</Text>
      </View>
      <View style={[styles.child, { backgroundColor: 'crimson' }]}>
        <Text>Square 3</Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  parent: {
    flex: 1,                        // fill the screen so there is space to centre in
    flexDirection: 'row',           // squares side by side (main axis = horizontal)
    justifyContent: 'space-around', // spread along the main axis (horizontal)
    alignItems: 'center',           // centre on the cross axis (vertical)
    backgroundColor: 'whitesmoke',
    marginTop: 30,
  },
  child: {
    width: 80,
    height: 80,
    justifyContent: 'center',       // centre the label inside each square
    alignItems: 'center',
  },
});
 