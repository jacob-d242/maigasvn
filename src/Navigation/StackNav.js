import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Box } from 'native-base'
import HomeScreen from '../Screens/HomeScreen'
import SingleProduct from '../Screens/SingleProduct'
import ShippingScreen from '../Screens/ShippingScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import PlaceOrderScreen from '../Screens/PlaceOrderScreen'
import OrderScreen from '../Screens/OrderScreen'

const Stack = createNativeStackNavigator()
export default function StackNav() {
  return (
      <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
             // headerShown:false
          }}
      >
          <Stack.Screen name='Home' component={HomeScreen} />  
          <Stack.Screen name='CheckOut' component={PaymentScreen} />  
          <Stack.Screen name='Single' component={SingleProduct} />   
          <Stack.Screen name='Shipping' component={ShippingScreen} />  
          <Stack.Screen name='Order' component={OrderScreen}/> 
          <Stack.Screen name='PlaceOrder' component={PlaceOrderScreen} />  
     </Stack.Navigator>
  )
}
