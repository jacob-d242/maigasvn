import React, { useState } from 'react'
import { Button, Center, HStack, Modal, Text, Pressable, VStack, Image } from 'native-base'
import MinBtn from './MinBtn'
import { COLORS, IMAGES } from '../Constants/Index.js'
import { useNavigation } from '@react-navigation/native'


const OrderInfo = [
    {
        title: 'Products',
        price: '22000',
        color: 'black'
    },
    {
        title: 'Shipping',
        price: '1400',
        color: 'black'
    },
    {
        title: 'Tax',
        price: '250',
        color: 'black'
    },
    {
        title: 'Total Amount',
        price: '23650',
        color: 'main'
    }
]

export default function OrderModal() {
    const [showModal, setShowModal] = useState(false)
    const navigation =useNavigation()
    return (
        <Center>
            <MinBtn
                bg={COLORS.main}
                color={COLORS.white}
                onPress={() => setShowModal(true)}
            >SHOW PAYMENTS</MinBtn>
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size='lg'
            >
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header >Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrderInfo.map((i, index) => (
                                <HStack key={index}
                                    alignItems='center'
                                    justifyContent='space-between'
                                >
                                    <Text fontWeight='medium' fontSize={16}>{i.title}</Text>
                                    <Text
                                        color={i.color === 'main' ? COLORS.main : COLORS.black}
                                        bold fontSize={16}
                                    >KShs {i.price}</Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable
                            w='full'
                            justifyContent='center'
                            bg={COLORS.backgrounds}
                            h={45}
                            rounded={2}
                            overflow='hidden'
                           mb={2}
                            onPress={()=>setShowModal(false)}
                        >

                            <Image
                                source={IMAGES.mpesa}
                                alt='Mpesa'
                                resizeMode='contain'
                                w='full'
                                h={39}
                            />
                        </Pressable>
                        
                        <Button
                            w='full'
                            bg={COLORS.primary}
                            h={45}
                            _text={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight:'bold'
                            }}
                            onPress={() => { 
                                navigation.navigate('Home')
                                setShowModal(false)
                            }}
                            _pressed={{
                                bg: COLORS.lightPrimary
                            }}
                        >Pay On Delivery</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}
