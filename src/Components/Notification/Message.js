import { Box, Center, Text } from 'native-base'
import React from 'react'

export default function Message({ bg, size, children, color ,bold}) {
    return (
        <Center bg={bg} p={4} rounded={8}>
            <Text color={color} fontSize={size} bold>
                {children}
            </Text>
        </Center>
    )
}
