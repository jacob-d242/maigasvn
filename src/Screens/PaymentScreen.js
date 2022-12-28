import React from 'react'
import { Box, Center, HStack, Image, ScrollView, Spacer, Text, VStack } from 'native-base'
import { COLORS, IMAGES } from '../Constants/Index'
import Icon from 'react-native-vector-icons/Ionicons'
import MinBtn from '../Components/MinBtn'
 
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
            
                <HStack 
                  
                  alignItems='center'
                  bg={COLORS.secondary}
                  px={3}
                  py={1}
                  rounded={10}
                  justifyContent='space-between'
                >
                  <Box>
                    <Image
                      source={IMAGES.mpesa}
                      alt='M-pesa'
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

             
            <MinBtn
              color={COLORS.white}
              bg={COLORS.primary}
            >CONTINUE</MinBtn>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}
