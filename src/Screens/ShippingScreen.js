import { Box, Center, FormControl, Input, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import { COLORS } from '../Constants/Index'
import MinBtn from '../Components/MinBtn'

const ShippingInputs = [
    {
        label: 'COUNTY',
        type:'text'
    },
    {
        label: 'STREET',
        type:'text'
    },
    {
        label: 'HOUSE NO',
        type:'text'
    },
    {
        label: 'PHONE NUMBER',
        type:'text'
    }
]

export default function ShippingScreen() {
    return (
        <Box flex={1} py={5} safeAreaTop bg={COLORS.primary}>
            <Center pb={15}>

                <Text color={COLORS.white} fontSize={22} bold>Shipping</Text>
            </Center>
            
            <Box h='full' px={5} bg={COLORS.white}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={6} mt={5}>
                {
                ShippingInputs.map((i,index) => (
                    <FormControl
                        key={index}
                    >
                        <FormControl.Label
                            _text={{
                                fontSize: '14px',
                                fontWeight:'bold'
                            }}
                        >
                            {i.label}
                        </FormControl.Label>
                        <Input
                            borderWidth={0.3}
                            borderColor={COLORS.main}
                            py={4}
                            bg={COLORS.backgrounds}
                            type={i.type}
                            _focus={{
                               // bg:COLORS.lightPrimary
                                borderWidth:1
                            }}
                        />
                    </FormControl>
                ))
            }

                    <MinBtn mt={5}  bg={COLORS.primary} color={COLORS.white} >
                        CONTINUE
                    </MinBtn> 
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}
