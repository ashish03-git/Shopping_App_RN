import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import SettingScreen from '../Screens/Categories';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Categories from '../Screens/Categories';
import Cart from '../Screens/Cart';
import Profile from '../Screens/Profile';
import All from '../Screens/All';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor:"rgba(0,0,256,0.5)"
          },
          headerTintColor: "#fff",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}

        component={Home}
      />
      <Tab.Screen
        name="Categories"
        options={{
          headerStyle: {
            backgroundColor:"rgba(0,0,256,0.5)"
          },
          headerTintColor: "#fff",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="th-large" color={color} size={size} />
          ),
        }}
        component={Categories}
      />
      <Tab.Screen
        name="All Products"
        options={{
          headerStyle:{
            backgroundColor:"rgba(0,0,256,0.5)"
          },
          headerTintColor:"#fff",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-cart" color={color} size={size} />
          ),
        }}
        component={All}
      />
      <Tab.Screen
        name="Cart"
        options={{
          headerStyle:{
            backgroundColor:"rgba(0,0,256,0.5)"
          },
          headerTintColor:"#fff",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-bag" color={color} size={size} />
          ),
        }}
        component={Cart}
      />
      <Tab.Screen
        name="You"
        options={{
          headerStyle:{
            backgroundColor:"rgba(0,0,256,0.5)"
          },
          headerTintColor:"#fff",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
        component={Profile}
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
