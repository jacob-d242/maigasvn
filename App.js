import { NativeBaseProvider, StatusBar, Text, View } from 'native-base'
import React from 'react'
import OrderScreen from './src/Screens/OrderScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/Screens/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import BottomNav from './src/Navigation/BottomNav'
const Stack = createNativeStackNavigator()

export default function App() {
  return ( 
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName='Bottom'
          screenOptions={{
            headerShown:false
          }}
        >
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='SignUp' component={RegisterScreen} />
          <Stack.Screen name='Bottom' component={BottomNav}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}