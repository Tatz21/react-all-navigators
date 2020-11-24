import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import AllignScreen from "./AllignScreen";
import ProfileScreen from "./ProfileScreen";
import WatchlistScreen from "./WatchlistScreen"

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const AllignStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const WatchlistStack =createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Allign"
      component={AllignStackScreen}
      options={{
        tabBarLabel: 'Allign',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Watchlist"
      component={WatchlistStackScreen}
      options={{
        tabBarLabel: 'Allign',
        tabBarIcon: ({ color }) => (
          <Icon name="logo-xing" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

);

export default MainTabScreen;


const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerRight: () =>(
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </HomeStack.Navigator>
  );
  
  const WatchlistStackScreen = ({navigation}) =>(
    <WatchlistStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      <WatchlistStack.Screen name="Home" component={WatchlistScreen} options={{
        headerRight: () =>(
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </WatchlistStack.Navigator>
  );


  const DetailsStackScreen = ({navigation}) =>(
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
     
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerRight: () =>(
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}></Icon.Button>
        )
      }}/>
      
    </DetailsStack.Navigator>
  );
  
  const AllignStackScreen = ({navigation}) =>(
    <AllignStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      
      <AllignStack.Screen name="Allign" component={AllignScreen} options={{
        headerRight: () =>(
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </AllignStack.Navigator>
  );
  
  const ProfileStackScreen = ({navigation}) =>(
    <ProfileStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
    }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        title:'',
        headerRight: () =>(
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}></Icon.Button>
        ),
        
      }}
      />
      
      
     </ProfileStack.Navigator>
  );

  