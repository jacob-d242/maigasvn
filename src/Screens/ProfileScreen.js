import { Center, Heading, Image, Text } from 'native-base'
import React from 'react'
import {COLORS,IMAGES} from '../Constants/Index'
import Tabs from '../Components/Profile/Tabs'
export default function ProfileScreen() {
  return (
      <>
          <Center bg={COLORS.primary} pt={10} pb={6} >
              <Image
                  source={IMAGES.user}
                  alt='profile'
                  w={24}
                  h={24}
                  resizeMode='cover'

              />
              <Heading color='#FFFF' fontSize={16} isTruncated bold>Jacob Moracha</Heading>
              <Heading color='#FFFF' fontSize={16} isTruncated bold >Joined Dec 12 2022</Heading>
          </Center>
          <Tabs/>
      </>
  )
    
}
