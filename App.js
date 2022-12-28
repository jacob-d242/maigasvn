import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'
import ProfileScreen from './src/Screens/ProfileScreen'
import ShippingScreen from './src/Screens/ShippingScreen'
import PaymentScreen from './src/Screens/PaymentScreen'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <PaymentScreen/>
    </NativeBaseProvider>
  )
}