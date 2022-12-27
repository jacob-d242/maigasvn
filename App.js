import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'
import ProfileScreen from './src/Screens/ProfileScreen'
import ShippingScreen from './src/Screens/ShippingScreen'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <ShippingScreen/>
    </NativeBaseProvider>
  )
}