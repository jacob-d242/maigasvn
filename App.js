import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'

import HomeScreen from './src/Screens/HomeScreen'
import CartScreen from './src/Screens/CartScreen'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <CartScreen/>
    </NativeBaseProvider>
  )
}