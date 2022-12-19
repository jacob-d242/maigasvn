import { Box, Flex, ScrollView, Text } from 'native-base';
import React from 'react';

export default function ProductCard() {
  return (
    <ScrollView flex={1}    >
      <Flex
        flexWrap='wrap'
        direction='row'
        justifyContent='space-between'
        px={6}
      >
        {}
      </Flex>      
      </ScrollView>
  );
}
