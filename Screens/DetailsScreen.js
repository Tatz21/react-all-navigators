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
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'middle'}}>LTP</Text>
    </View>
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'right'}}>Chng(%)</Text>
    </View>
    <View >
    
    
    </View>
      </View>
    );
  }
}

export default DetailsScreen;
