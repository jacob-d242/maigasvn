import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'

import HomeScreen from './src/Screens/HomeScreen'
import SingleProduct from './src/Screens/SingleProduct'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <SingleProduct/>
    </NativeBaseProvider>
  )
}