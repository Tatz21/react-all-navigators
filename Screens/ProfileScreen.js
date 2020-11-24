import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}> </Text>
        <View style={styles.SquareShape} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  SquareShape: { 
    width:400,
    height: 600,
    backgroundColor: '#A9A9A9' 
  },

});