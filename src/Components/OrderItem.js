import React from 'react'
import { Box, Center, FlatList, HStack, Pressable, Text,Image, VStack, Button } from 'native-base'
import gasData from '../data/ProductData'
import { COLORS, IMAGES } from '../Constants/Index'
export default function OrderItem() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={gasData.slice(0, 3)}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) =>
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems='center'
              bg={COLORS.white}
              shadow={1}
              rounded={10}
              overflow='hidden'
            >
              <Center w='25%' bg={COLORS.lightSecondary}>
                <Image
                  source={{uri : item.image}}
                  //source={IMAGES.card}
                  w='full'
                  h={24}
                  alt={item.name}
                />
              </Center>
              <VStack w='60%' px={2}>
                <Text isTruncated color={COLORS.black} bold fontSize={13}>
                  {item.name}
                </Text>
                <Text isTruncated color={COLORS.black} bold fontSize={13}>
                  Kshs {item.price}
                  </Text>
              </VStack>
              <Center>
                <Button
                  bg={COLORS.main}
                  _pressed={{
                    bg:'COLORS.main'
                  }}
                  _text={{
                    color:COLORS.white
                  }}
                >
                  6
                </Button>
              </Center>
            </HStack>
          </Box>
      </Pressable>
    }
    />
  )
}
