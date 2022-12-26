import { Box, Button, Center, HStack, ScrollView, Text } from 'native-base';
import React from 'react';
import CartEmpty from '../Components/CartEmpty';
import CartItems from '../Components/CartItems';
import {COLORS} from '../Constants/Index'
import MinBtn from '../Components/MinBtn';
export default function CartScreen() {
  return (
    <Box safeAreaTop flex={1}>
      <Center w='full' py={5}>
        <Text  fontSize={25}  bold>CartScreen</Text>
      </Center>
      {/* IF CART IS EMPTY */}
      {/*<CartEmpty />*/}
      {/* IF CART HAS PRODUCTS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        
        {/* Buttons */}
        <Center mt={5}>
        <HStack
          rounded={50}
          justifyContent='space-between'
          bg={COLORS.backgrounds}
          shadow={2}
          w='90%'
          pl={5}
          h={45}
          alignItems='center'
        >
          <Text>Total</Text>
          <Button
            px={10}
            h={45}
            rounded={50}
            bg={COLORS.main}
            _text={{
              fontSize: '18',
              fontWeight:'medium'
            }}
              _pressed={{
                bg: COLORS.lightPrimary
              }}
          >Ksh 100</Button>
          </HStack>
        </Center>
        <Center px={5}>
          <MinBtn mt={10} bg={COLORS.main} color='#FFFF' >CheckOut</MinBtn>
        </Center>
      </ScrollView>
    </Box>
  );
}
