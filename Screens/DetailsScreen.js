import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{flex: 1}}>
      <Text>Symbol</Text>
    </View>
    <View style={{textAlign: "middle",flex: 1}}>
      <Text>LTP</Text>
    </View>
    <View style={{textAlign:"right" , flex: 1}}>
      <Text>Chng(%)</Text>
    </View>
    <View >
    
    
    </View>
      </View>
    );
  }
}

export default DetailsScreen;
