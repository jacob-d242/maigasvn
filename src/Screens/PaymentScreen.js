import React from 'react'
import { Box, Center, HStack, Image, ScrollView, Spacer, Text, VStack } from 'native-base'
import { COLORS, IMAGES } from '../Constants/Index'
import Icon from 'react-native-vector-icons/Ionicons'
const paymentMode = [
  {
    image: IMAGES.mpesa,
    alt: 'MPESA'
  },
  {
    image: IMAGES.card,
    alt: 'MPESA'
  },
]

export default function PaymentScreen() {
  return (
    <Box safeAreaTop bg={COLORS.main} py={5}>
      <Center pb={15}>
        <Text color={COLORS.white} fontSize={22} bold>
          Payment
        </Text>
      </Center>
      <Box h='full' px={5} bg={COLORS.backgrounds}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {
              paymentMode.map((i, index) => {
                <HStack key={index}
                  alignItems='center'
                  bg={COLORS.secondary}
                  px={3}
                  py={1}
                  rounded={10}
                  justifyContent='space-between'
                >
                  <Box>
                    <Image
                      source={i.image}
                      alt={i.alt}
                      h={70}
                      resizeMode='contain'
                      w={70}
                    />
                  </Box>
                  <Icon
                    name='checkmark-circle'
                    size={30}
                    color={COLORS.main}
                  />
                </HStack>

              })
            }
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}
