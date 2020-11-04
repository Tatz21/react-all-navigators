import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailsScreen</Text>
        <Button
        title='Go to profile screen'
        onPress={()=>navigation.navigate("Profile")}
        />
  
      </View>
    );
  };
  export default DetailsScreen;

  const styles = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent: 'center'
      },
  });