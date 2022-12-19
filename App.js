import { NativeBaseProvider, Text, View } from 'native-base'
import React from 'react'

import Verify from './src/Screens/Verify'

export default function App() {
  return ( 
    <NativeBaseProvider>
      <Verify/>
    </NativeBaseProvider>
  )
}