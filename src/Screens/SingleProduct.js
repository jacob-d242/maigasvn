import { Box, HStack, Heading, Image, ScrollView, Spacer, Text } from 'native-base';
import React, { useState } from 'react';
import { COLORS } from '../Constants/Index';
import NumericInput from 'react-numeric-input';
import Rating from '../Components/Rating';
import MinBtn from '../Components/MinBtn';
import Review from '../Components/Review';
import Message from '../Components/Notification/Message';
export default function SingleProduct() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={COLORS.background}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assets/Images/Gas.png')}
          alt="Product"
          resizeMode="contain"
          h={250}
        />
        <Heading bold fontSize={20} mb={2} mt={5} lineHeight={22}>
          Total 12Kg Gas
        </Heading>
        <Rating value={3} />
        <HStack space={2} alignItems="center" my={5}>
          {/*<NumericInput 
              value={value}  
              minValue={6}
              iconSize={25}
              totalHeight={20}
              totalWidth={130}
              rounded
          />*/}
          <Spacer />
          <Heading bold fontSize={23}>KShs 2500</Heading>

        </HStack>
        <Text lineHeight={24} fontSize={14} > 
          Lorem ipsum gas gsag gasgagsgaggagssgsfdjd5r6tw7y8u9qjogknbnkhbaAGS8hdqEIFNGOBHCHJ2EKJFVBCJKM2JR3FE 
          Lorem ipsum gas gsaggasgagsgaggagssgsfdjd5r6tw7y8u9qjogknbnkhbaAGS8hdqEIFNGOBHCHJ2EKJFVBCJKM2JR3FE 
          Lorem ipsum gas gsag  asgagsgaggagssgsfdjd5r6tw7y8u9qjogknbnkhbaAGS8hdqEIFNGOBHCHJ2EKJFVBCJKM2JR3FE 
        </Text>
        <MinBtn bg={COLORS.primary} color='#FFFF' mt={3}>Add To Cart</MinBtn>
        <Review />
        
      </ScrollView>
    </Box>
  );
}
