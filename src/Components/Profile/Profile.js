import { Box, FormControl, Input, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import { COLORS } from '../../Constants/Index'
import MinBtn from '../MinBtn'


const Inputs = [
  {
    label: 'USERNAME',
    type: 'text'
  },
  {
    label: 'EMAIL',
    type: 'text'
  },
  {
    label: 'PHONE',
    type: 'phone'
  },
  {
    label: 'NEW PASSWORD',
    type: 'password'
  },
  {
    label: 'CONFIRM PASSWORD',
    type: 'password'
  }
]
export default function Profile() {
  return (
    <Box h='full' bg={COLORS.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack mt={5} space={3} pb={0}>
          {
            Inputs.map((i,index) => (
              <FormControl
                key={index}
              >
                <FormControl.Label
                  _text={{
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                 
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.5}
                  bg={COLORS.secondary}
                  py={2}
                  type={i.type}
                  color={COLORS.main}
                  fontSize={18}
                  borderColor={COLORS.main}
                  _focus={{
                    // bg: COLORS.lightSecondary
                  }}
                />
              </FormControl>
            ))
          }

          <MinBtn bg={COLORS.main} color={COLORS.white}>UPDATE PROFILE</MinBtn>
        </VStack>
      </ScrollView>
    </Box>
  )
}
