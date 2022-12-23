import { Box, Center, ScrollView, Text } from 'native-base';
import React from 'react';
import CartEmpty from '../Components/CartEmpty';
import CartItems from '../Components/CartItems';

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
        <CartItems/>
      </ScrollView>
    </Box>
  );
}
