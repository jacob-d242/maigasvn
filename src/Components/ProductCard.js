import { Box, Flex, ScrollView, Image, Pressable, Heading, Text } from 'native-base';
import React from 'react';
import gasData from '../data/ProductData';


export default function ProductCard() {
  return (
    <ScrollView flex={1}    >
      <Flex
        flexWrap='wrap'
        direction='row'
        justifyContent='space-between'
        px={6}
      >
        {
          gasData.map((product) => (
            <Pressable
              key={product.id}
              w='48%'
              bgColor='white'
              rounded='md'
              shadow='3'
              pt={0.3}
              my={3}
              pb={3}
              overflow='hidden'
            >
              <Image
                
                source={{uri: product.image}}
                alt={product.name}
                w='full'
                top='1'
                //h ={24}
                height={200}
                resizeMode='contain'
              />
              <Box px={4} pt={1}>
                <Heading size='sm' bold>KSHs {product.price}</Heading>
                <Text fontSize={16} mt={1} w='full' isTruncated>{product.name}</Text>
              </Box>
            </Pressable>
           
          ))
        }
      </Flex>      
      </ScrollView>
  );
}
