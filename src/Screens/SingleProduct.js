import { Box, HStack, Heading, Image, ScrollView, Text } from 'native-base';
import React, { useState } from 'react';
import {COLORS} from '../Constants/Index'
import NumericInput from 'react-numeric-input';
import Rating from '../Components/Rating';
export default function SingleProduct() {
    const [value,setValue] = useState(0)
  return (
    <Box safeArea flex={1} bg={COLORS.background}>
          <ScrollView
              px={5}
              showsVerticalScrollIndicator={false}
          >
              <Image
                  source={require('../assets/Images/Gas.png')}
                  alt='Product'
                  resizeMode='contain'
                  h={300}
                  />
              <Heading bold fontSize={20} mb={2} mt={5} lineHeight={22} >
                  Total 12Kg Gas 
              </Heading>
              <Rating/>
              <HStack space={5} alignItems='center' my={5}>
                  
                {/*<NumericInput value={value} totalWidth={ 150} />*/}
                  
              </HStack>
          </ScrollView>
    </Box>
  );
}
