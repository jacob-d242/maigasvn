import { Box, Flex, ScrollView, Text } from 'native-base';
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
            <Text>{ product.name}</Text>
          ))
        }
      </Flex>      
      </ScrollView>
  );
}
