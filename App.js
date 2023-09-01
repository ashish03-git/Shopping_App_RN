
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './Reanimated/Navigation.js/MainStack'
import { View, StatusBar } from "react-native"
import { Provider } from 'react-redux'
import store from './Reanimated/Redux/Store'
import React from 'react'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden={true} backgroundColor={"rgba(0,0,256,0.9)"} />
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App
