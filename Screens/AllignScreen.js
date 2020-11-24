import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

class AllignScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Toolbar
      
      centerElement="Searchable"
      searchable={{
        autoFocus: true,
        placeholder: 'Search',
      
      }}

    />
    );
  }
}

export default AllignScreen;
