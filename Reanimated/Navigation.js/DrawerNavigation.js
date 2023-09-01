import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import SettingScreen from '../Screens/Categories'
import BottomTabNavigation from './BottomTabNavigation'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name=' ' options={{headerShown:false}} component={BottomTabNavigation}/>
      </Drawer.Navigator>
    </>

  )
}

export default DrawerNavigation