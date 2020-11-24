import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainTabScreen from './Screens/MainTabScreen';
import {DrawerContent} from "./Screens/DrawerContent";



const Drawer = createDrawerNavigator();



const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerPosition="right" drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={MainTabScreen} />
        <Drawer.Screen name="Allign" component={MainTabScreen} />
        <Drawer.Screen name="Profile" component={MainTabScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;