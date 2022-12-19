import { HStack, Input } from 'native-base';
import React from 'react';
import { COLORS } from '../Constants/Index';
import { Pressable } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

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
        placeholder='Kringet,Dasan'
        w='85%'
        bgColor='#FFFF'
        h='12'
        borderWidth={0}
      />
      <Pressable ml={3}>
        <Icon
          name='basket'
          size={30}
        />
      </Pressable>
    </HStack>
  );
}
