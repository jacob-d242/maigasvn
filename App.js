import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'
import LoginScreen from './src/Screens/LoginScreen'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <LoginScreen/>
    </NativeBaseProvider>
  )
}