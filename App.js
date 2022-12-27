import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'
import ProfileScreen from './src/Screens/ProfileScreen'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <ProfileScreen/>
    </NativeBaseProvider>
  )
}