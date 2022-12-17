import { Box, Heading, Image, Input, Text, VStack } from 'native-base';
import React from 'react';
import { COLORS, IMAGES } from '../Constants/Index';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


export default function LoginScreen() {
  const size=35
  return (
    <Box flex={1} bg={COLORS.backgrounds}>
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
        px='6'
        justifyContent='center'
      >
        <Heading>Login </Heading>
        <VStack space={3} alignItems='center'>
          <Input
            InputLeftElement={
              <Icon
               
                name='email'
                size={size}
                color={COLORS.LightPrimary}
              />
            }
            variant='underlined'
            pl={2}
            placeholder='+257 700000000'
            w='90%'
          />
        </VStack>
      </Box>
     
    </Box>
  );
}
