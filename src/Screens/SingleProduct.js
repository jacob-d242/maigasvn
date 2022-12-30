import { Box, HStack, Heading, Image, ScrollView, Spacer, Text } from 'native-base';
import React, { useState } from 'react';
import { COLORS } from '../Constants/Index';
import Rating from '../Components/Rating';
import MinBtn from '../Components/MinBtn';
import Review from '../Components/Review';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-numeric-input';

export default function SingleProduct({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation()
  const product = route.params
  return (
    <Box safeArea flex={1} bg={COLORS.background}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Product"
          resizeMode="contain"
          h={250}
        />
        <Heading bold fontSize={20} mb={2} mt={5} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReview}`} />
        <HStack space={2} alignItems="center" my={5}>
          {
            product.stock > 0 ? (
              //<NumericInput
              //  value={value}
              //  step={1}
              //  maxvalue={product.stock}
              //  iconSize={25}
              //  totalWidth={140}
              //  totalHeight={40}

              ///>
            <Text>Home</Text>
            ) : (
              <Heading italic color={COLORS.danger} fontSize={23}>Out Of Stock</Heading>
            )
          }


          <Spacer />
          <Heading bold fontSize={23}>KShs{product.price}</Heading>

        </HStack>
        <Text lineHeight={24} fontSize={16} bold>
          {product.size} (Kgs)

        </Text>
        <Text lineHeight={24} fontSize={14} >
          {product.description}

        </Text>
        <MinBtn
           onPress={()=>navigation.navigate('Cart')}
          bg={COLORS.primary}
          color='#FFFF'
          mt={3}>Add To Cart</MinBtn>
        <Review />

      </ScrollView>
    </Box>
  );
}
