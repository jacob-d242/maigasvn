import { Box, HStack, Pressable, Text } from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import gasData from '../data/ProductData'
import { COLORS } from '../Constants/Index'

const Swiper = () => {
  <SwipeListView
    rightOpenValue={-50}
   // previewRowKey={0}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={gasData.slice(0, 2)}
    renderItem={}
    renderHiddenItem={}
    showsVerticalScrollIndicator={false}
  />
};

const renderIterms = (data) => {
  <Pressable>
    <Box ml={6} mb={3}>

      <HStack
        alignItems='center'
        bg={COLORS.backgrounds}
        shadow={1}
        rounded={10}
        overflow='hidden'
      >
        <Text>fghjkl</Text>
      </HStack>
    </Box>
  </Pressable>
}
const renderHiddenIterms = () => {
  <Pressable>
    <Box ml={6} mb={3}>

      <HStack
        alignItems='center'
        bg={COLORS.backgrounds}
        shadow={1}
        rounded={10}
        overflow='hidden'
      >
        <Text>fghjkl</Text>
      </HStack>
    </Box>
  </Pressable>
}

export default function CartItems() {
  
  return (
    <Box mr={3}>
          <Swiper/>
   </Box>
  )
}
