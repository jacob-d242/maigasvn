import { Box, Image, Text } from 'native-base';
import React from 'react';
import { COLORS } from '../Constants/Index';


export default function LoginScreen() {
  return (
    <Box flex={1} bg={COLORS.backgrounds}>
      <Image
        resizeMode='cover'
        size="lg"
        w="full"
        source={require("../assets/Images/MobileHome.png")}
      />
     
    </Box>
  );
}
