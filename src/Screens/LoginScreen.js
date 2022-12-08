import { Box, Image, Text } from 'native-base';
import React from 'react';
import { COLORS, IMAGES } from '../Constants/Index';


export default function LoginScreen() {
  return (
    <Box flex={1} bg={COLORS.backgrounds}>
      <Image
        resizeMode='cover'
        size="lg"
        w="full"
        source={IMAGES.backgroundImg}
      />
      <Box>
        
      </Box>
     
    </Box>
  );
}
