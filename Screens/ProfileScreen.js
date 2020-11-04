import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ProfileScreen</Text>
        <Button
        title='Go to home screen'
        onPress={()=>navigation.navigate("Home")}
        />
  
      </View>
    );
  };

  export default ProfileScreen;

  const styles = StyleSheet.create({
      container:{
          flex:1,
          alignItems:'center',
          justifyContent: 'center'
      },
  });