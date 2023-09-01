import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigation from './DrawerNavigation'

import LoginScreen from "../Authorization/LoginScreen"
import Registration from "../Authorization/Registration"
import SingleProductScreen from '../Screens/SingleProductScreen'


const Stack = createStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login"  options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Registration" options={{ headerShown: false }} component={Registration} />
        <Stack.Screen name="SingleProduct" options={{ headerShown: false }} component={SingleProductScreen} />
      
        <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
        
    </Stack.Navigator>
  )
}

export default MainStack