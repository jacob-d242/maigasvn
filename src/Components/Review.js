import { Box, Text, Heading } from 'native-base'
import React from 'react'
import { COLORS } from '../Constants/Index'
import Rating from './Rating'
import Message from './Notification/Message'

export default function Review() {
    return (
        <Box my={5}>
            <Heading>
                Review
            </Heading>
            <Message
                bold
                bg={COLORS.backgrounds}
                color={COLORS.primary}
                children={'No Reviews'}
            />
            <Box mt={3} rounded={5} p={3} bg={COLORS.secondary}>
                <Heading fontSize={18} bold>
                    Jane Doe
                </Heading>
                <Rating value={4} />
                <Text mb={3} fontSize={12}>Dec 23 2022</Text>
                <Message
                    size={12}
                    bg={COLORS.backgrounds}
                    color='#111'
                    children={'Our Products are very quality, durable.longlasting and tasty i will come back to buy again in the near furute thank you '}
                />
            </Box>
        </Box>
    )
}
