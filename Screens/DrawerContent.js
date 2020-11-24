import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';






export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            
            <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="home-outline" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Home"
                 onPress={()=>{}}
            />
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="account-outline" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Views"
                 onPress={()=>{}}
            />
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="bookmark-outline" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="List"
                 onPress={()=>{props.navigation.navigate('Chart')}}
            />
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="settings-outline" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Compact"
                 onPress={()=>{}}
            />
              <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="account-check-outline" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Full"
                 onPress={()=>{props.navigation.navigate('AxisScreen')}}
            />
              <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="car-limousine" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Custom"
                 onPress={()=>{props.navigation.navigate('AxisScreen')}}
            />
            
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="cards-outline" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Bid Ask"
                 onPress={()=>{props.navigation.navigate('AxisScreen')}}
            />
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="cellphone-iphone" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Date & Time"
                 onPress={()=>{props.navigation.navigate('AxisScreen')}}
            />
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="castle" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Change Stats"
                 onPress={()=>{props.navigation.navigate('AxisScreen')}}
            />
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="chart-line" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="High Low View"
                 onPress={()=>{props.navigation.navigate('AxisScreen')}}
            />
            <DrawerItem
                icon={({color,size})=> (
                    <Icon
                    name="ammunition" 
                    color={color}
                    size={size}
                    />
                 )}
                 label="Sentiment"
                 onPress={()=>{props.navigation.navigate('AxisScreen')}}
            />
            


            </Drawer.Section>        
        
    </View>

    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 0,
    },
    bottomDrawerSection: {
        marginBottom: 5,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });