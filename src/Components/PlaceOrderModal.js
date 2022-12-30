import React, { useState } from 'react'
import {  Button, Center, HStack, Modal, Text, VStack } from 'native-base'
import MinBtn from './MinBtn'
import {COLORS} from '../Constants/Index.js'

const OrderInfo = [
  {
    title: 'Products',
    price: '22000',
    color:'black'
  },
  {
    title: 'Shipping',
    price: '1400',
    color:'black'
  },
  {
    title: 'Tax',
    price: '250',
    color:'black'
  },
  {
    title: 'Total Amount',
    price: '23650',
    color:'main'
  }
]

export default function PlaceOrderModal() {
  const [showModal,setShowModal] = useState(false)
  return (
    <Center>
      <MinBtn
        bg={COLORS.black}
        color={COLORS.white}
        onPress={() => setShowModal(true)}
      >Total</MinBtn>
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
            <Button
              flex={1}
              bg={COLORS.main}
              h={45}
              _text={{
                fontSize: 16,
                color:COLORS.white
              }}
              onPress={()=> setShowModal(false)}
              _pressed={{
                bg:COLORS.lightPrimary
              }}
            >Place Order</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </Center>
  )
}
