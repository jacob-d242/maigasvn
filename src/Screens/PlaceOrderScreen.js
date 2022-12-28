import { Box, ScrollView } from 'native-base'
import React from 'react'
import { COLORS } from '../Constants/Index'
import OrderInfo from '../Components/OrderInfo'
export default function PlaceOrderScreen() {
    return (
        <Box bg={COLORS.backgrounds} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <OrderInfo
                        title='Customer'
                        icon='user'
                        subTitle='Jacob Moracha'
                        text='jacobmoracha@gmail.com'

                    />
                    {/* Missing Icons */}
                    <OrderInfo
                        title='Shipping Info'
                        icon=''
                        subTitle='Shipping : Mombasa'
                        text='Pay mode : M-Pesa'
                        
                    />
                    <OrderInfo
                        title='Delivery adress'
                        icon='user'
                        subTitle='Adress'
                        text='Mombasa,Ke, P.O Box 80100 Tom Mboya Street '
                        
                    />
                </ScrollView>
          </Box>
        </Box>
    )
}
