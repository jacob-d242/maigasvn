import { Box, Heading, ScrollView } from 'native-base'
import React from 'react'
import { COLORS } from '../Constants/Index'
import OrderInfo from '../Components/OrderInfo'
import OrderItem from '../Components/OrderItem'
import PlaceOrderModal from '../Components/PlaceOrderModal'
import OrderModal from '../Components/OrderModal'
export default function OrderScreen() {
    return (
        <Box bg={COLORS.backgrounds} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {/* Missing Icons */}
                    <OrderInfo
                        title='Shipping Info'
                        icon=''
                        success
                        subTitle='Shipping : Mombasa'
                        text='Pay mode : M-Pesa'
                        
                    />
                    <OrderInfo
                        title='Delivery adress'
                        icon='user'
                        danger
                        subTitle='Adress'
                        text='Mombasa,Ke,  '
                        
                    />
                </ScrollView>
            </Box>
            <Box flex={1} pb={3} px={6}>
                <Heading isTruncated bold fontSize={15} my={4}>
                    Products
                </Heading>
                <OrderItem />
                <OrderModal/>
            </Box>
        </Box>
    )
}
