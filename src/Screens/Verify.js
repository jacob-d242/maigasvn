import { Box, Button, Center, Image, Text, VStack } from 'native-base';
import React from 'react';
import { COLORS, IMAGES } from '../Constants/Index';
import MinBtn from '../Components/MinBtn';

export default function Verify() {
  return (
    <Box flex={1} bgColor={COLORS.bgColor}>
      <Image
        flex={1}
        resizeMode='cover'
        alt='background-image'
        size="lg"
        w="full"
        source={IMAGES.backgroundImg}
      />
      <Box
        w='full'
        h='full'
        position='absolute'
        top='0'
        justifyContent='center'
      >
      <Center w='full' height={150}>
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
    </Box>
  );
}
