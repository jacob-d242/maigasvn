import { Box, Center, HStack, Image, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import gasData from '../data/ProductData'
import { COLORS } from '../Constants/Index'
import Icon  from 'react-native-vector-icons/FontAwesome'

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey='0'
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={gasData.slice(0, 3)}
    renderItem={renderItems}
    renderHiddenItem={hiddenItem}
    showsVerticalScrollIndicator={false}
  />
)

const renderItems = (gasData) => (
  <Pressable>
    <Box ml={6} mb={3}>

      <HStack
        alignItems='center'
        bg={COLORS.backgrounds}
        shadow={1}
        rounded={10}
        overflow='hidden'
      >
        <Center w='25%' bg={COLORS.main }>
          <Image
            source={{ uri: gasData.item.image }}
            alt={gasData.item.name}
            w='full'
            resizeMode='contain'
          />
        </Center>
        <VStack w='60%' px={2} space={3}>
          <Text isTruncated bold color={COLORS.main} fontSize={ 18}>{gasData.item.name }</Text>
          <Text  bold color={COLORS.main} fontSize={18}>KSHS{gasData.item.price }</Text>
        </VStack>
      </HStack>
    </Box>
  </Pressable>
)

const hiddenItem = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h='88%'
    ml='auto'
    justifyContent='center'
    bg='red'>
    <Center alignItems='center' space={2} >
      <Icon name='trash' size={28} color={COLORS.main } />
    </Center>
  </Pressable>
)

export default function CartItems() {

  return (
    <Box mr={6} >
      <Swiper />
    </Box>
  )
}
