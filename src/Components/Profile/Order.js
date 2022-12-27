import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base'
import React from 'react'
import { COLORS } from '../../Constants/Index'
export default function Order() {
  return (
    <Box h='full' bg={COLORS.white} pt={5} >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          <HStack
            space={4}
            justifyContent='space-between'
            alignItems='center'
            bg={COLORS.secondary}
            py={5}
            px={2}
          >
            <Text fontSize={11} color={COLORS.main} isTruncated>Q129345</Text>
            <Text fontSize={14} bold color={COLORS.primary} isTruncated>PAID</Text>
            <Text fontSize={11} italic color={COLORS.main} isTruncated>12 Dec 2022</Text>
            <Button
              px={7}
              py={1.5}
              bg={COLORS.main}
              rounded={50}
              color={COLORS.white}
              _text={{
                color:COLORS.white
              }}
              _pressed={{
                bg:COLORS.lightPrimary
              }}
            >
              Kshs 1000
            </Button>
          </HStack>
        </Pressable>
        {/* Upaid orders */}
        <Pressable>
          <HStack
            space={4}
            justifyContent='space-between'
            alignItems='center'
            py={5}
            px={2}
          >
            <Text fontSize={11} color={COLORS.primary} isTruncated>Q129345</Text>
            <Text fontSize={14} bold color={COLORS.primary} isTruncated>NOT PAID</Text>
            <Text fontSize={11} italic color={COLORS.primary} isTruncated>12 Dec 2022</Text>
            <Button
              px={7}
              py={1.5}
              bg={COLORS.danger}
              rounded={50}
              color={COLORS.white}
              _text={{
                color:COLORS.white
              }}
              _pressed={{
                bg:COLORS.lightPrimary
              }}
            >
              Kshs 1000
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}
