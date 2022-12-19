import { Box, Button, Center, Image, Text, VStack } from 'native-base';
import React from 'react';
import { COLORS, IMAGES } from '../Constants/Index';
import MinBtn from '../Components/MinBtn';

export default function Verify() {
  return (
    <Box flex={1} bgColor={COLORS.bgColor}>
      <Center w='full' height={250}>
        <Image
          source={IMAGES.logo}
          size='lg'
        />
      </Center>
      <VStack space={6} px={5} alignItems='center'>
        <MinBtn
          bg={COLORS.primary}
          color='#FFFF'
        >Register</MinBtn>
        <MinBtn
          bg={COLORS.primary}
          color='#FFFF'
        >Login</MinBtn>
      </VStack>
    </Box>
  );
}
