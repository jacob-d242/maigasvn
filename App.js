import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'

import HomeScreen from './src/Screens/HomeScreen'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
  )
}