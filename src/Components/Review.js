import { Box, Text, Heading, VStack, FormControl, Select, CheckIcon, TextArea } from 'native-base'
import React, { useState } from 'react'
import { COLORS } from '../Constants/Index'
import Rating from './Rating'
import Message from './Notification/Message'
import MinBtn from './MinBtn'

export default function Review() {
    const [ratings, setRatings] = useState('');
    return (
        <Box my={5}>
            <Heading fontSize={16}>
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
            <Box mt={3} mb={4}>
                <Heading fontSize={16}>Review This Product</Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: '20px',
                                fontFamily: 'Raleway-Bold'
                            }}
                        >
                            Rating
                        </FormControl.Label>
                        <Select
                            bg={COLORS.backgrounds}
                            borderBottomWidth={0}
                            rounded={8}
                            py={4}
                            fontSize={18}
                            _selectedItem={{
                                bg: COLORS.backgrounds,
                                fontSize: '22px',
                                endIcon: <CheckIcon size={5} />,
                            }}
                            selectedValue={ratings}
                            onValueChange={(e) => setRatings(e)}
                        >
                            <Select.Item label='1 - Poor' value='1' />
                            <Select.Item label='2 - Fair' value='2' />
                            <Select.Item label='3 - Good' value='3' />
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: '18px',
                            }}
                        >
                            Comment
                        </FormControl.Label>
                        <TextArea
                            h={24}
                            w='full'
                            placeholder='This product is .....'
                            borderWidth={0}
                            bg={COLORS.backgrounds}
                            py={4}
                        />
                    </FormControl>
                    <MinBtn bg={COLORS.primary}>Submit</MinBtn>
                    <Message
                        color={COLORS.lightPrimary}
                        bg={COLORS.secondary}
                        children={"Please 'Login' to write a review"}
                    />
                </VStack>
            </Box>
        </Box>
    )
}
