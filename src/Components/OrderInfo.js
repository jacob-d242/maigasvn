import { Box, Center, Heading,  Text } from 'native-base'
import React from 'react'
import { COLORS } from '../Constants/Index'
import  Icon  from 'react-native-vector-icons/FontAwesome'
export default function OrderInfo({ icon, title, subTitle, text, success, danger }) {
    return (
        <Center
            bg={COLORS.white}
            w={200}
            py={2}
            rounded={10}
            shadow={4}
            mb={2}
            ml={5}
            pr={1}
            px={4}
        >
            <Center bg={COLORS.main} w={60} h={60} rounded='full'>
                <Icon
                    name={icon}
                    size={36}
                    color={COLORS.white}
                />
            </Center>
            <Heading
                bold
                fontSize={13}
                isTruncated
                mt={3}
                mb={2}
                color={COLORS.black}
            >
                {title}
            </Heading>
            <Text fontSize={13} color={COLORS.black}>
                {subTitle}
            </Text>
            <Text fontSize={13} textAlign='center' italic color={COLORS.black}>
                {text}
            </Text>

            {
                success && (
                    <Center py={2} mt={2} rounded={5} w='full' bg={COLORS.lightPrimary}>
                        <Text fontSize={13} color={COLORS.black}>
                           Paid on Jan 2021
                        </Text>
                    </Center>
                )
            }
            {
                danger && (
                    <Center py={2} mt={2} rounded={5} w='full' bg={COLORS.red}>
                        <Text fontSize={13} color={COLORS.black}>
                            Not Delivered
                        </Text>
                    </Center>
                )
            }
        </Center>
    )
}
