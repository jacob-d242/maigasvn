import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <PlaceOrderScreen/>
    </NativeBaseProvider>
  )
}