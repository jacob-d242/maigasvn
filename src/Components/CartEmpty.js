import { Box,Center,Text } from 'native-base'
import React from 'react'
import {COLORS} from '../Constants/Index'
import Icon from 'react-native-vector-icons/FontAwesome'
import MinBtn from './MinBtn'
export default function CartEmpty() {
  return (
      <Box flex={1} px={5}>
          <Center h='90%'>
              <Center w={200} h={200} bg={COLORS.backgrounds} rounded='full'>
                  <Icon size={100} name='shopping-basket' color={COLORS.primary} />
              </Center>
              <Text fontSize={25} color={COLORS.primary} bold >
                  Cart is Empty
              </Text>
         </Center>
              <MinBtn
              bg={COLORS.primary}
              color='#FFFF'
              children={'Start Shopping'}
              />
    </Box>
  )
}
