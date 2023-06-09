import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#b1b1b1',
        tabBarActiveTintColor: '#007185',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Entypo name="home" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Entypo name="back-in-time" color={color} size={25} />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Shopping Cart"
        component={ShoppingCartStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={ShoppingCartScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Entypo name="list" color={color} size={25} />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Entypo name="user" color={color} size={25} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
