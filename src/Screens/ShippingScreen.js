import { Box, Center, Text } from 'native-base'
import React from 'react'
import { COLORS } from '../Constants/Index'
export default function ShippingScreen() {
    return (
        <Box flex={1} safeAreaTop bg={COLORS.primary}>
            <Center pb={15}>

                <Text color={COLORS.white} fontSize={22} bold>Shipping</Text>
            </Center>
            <Box h='full' bg={COLORS.white}>

            </Box>
        </Box>
    )
}