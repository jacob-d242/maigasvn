import { Box, HStack, Input } from 'native-base';
import React from 'react';
import { COLORS } from '../Constants/Index';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Searchbar() {
  return (
    <HStack
      space={3}
      w='full'
      px={6}
      bg={COLORS.primary}
      py={4}
      alignItems='center'
      safeAreaTop
    >
      <Input
        placeholder="Search People & Places"
        width='85%'
        borderRadius='8'
        py='3'
        px='3'
        fontSize="18"
        bgColor={COLORS.backgrounds}
      />
      <Pressable ml={3}>
        <Icon
          name='basket'
          size={33}
          color={COLORS.backgrounds}
        />
        <Box
          rounded='full'
          px={1}
          position='absolute'
          top={-16}
          left={2}
          _text={{
            color: '#F0F0F0',
            fontSize: '18px'
          }}
        >5</Box>
      </Pressable>
    </HStack>
  );
}
