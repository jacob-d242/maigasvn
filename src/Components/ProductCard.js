import { Box, Flex, ScrollView, Image,Pressable, Heading } from 'native-base';
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
              w='47%'
              bgColor='white'
              rounded='md'
              shadow='2'
              pt={0.3}
              my={3}
              pb={3}
              overflow='hidden'
            >
              <Image
                
                source={{uri: product.image}}
                alt={product.name}
                w='full'
                h ={24}
                resizeMode='contain'
              />
              <Box px={4} pt={1}>
                <Heading size='sm' >{ product.name}</Heading>
              </Box>
            </Pressable>
           
          ))
        }
      </Flex>      
      </ScrollView>
  );
}
