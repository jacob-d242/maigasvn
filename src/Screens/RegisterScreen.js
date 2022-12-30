import { Box, Button, Heading, Image, Input, Text, VStack } from 'native-base';
import React from 'react';
import { COLORS, IMAGES } from '../Constants/Index';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from 'react-native';
import user from 'react-native-vector-icons/AntDesign'

export default function RegisterScreen({navigation}) {
  const size=25
  return (
    <Box flex={1} bgColor={COLORS.lightPrimary}>
      <Image
        flex={1}
        resizeMode='cover'
        alt='background-image'
        size="lg"
        w="full"
        source={IMAGES.backgroundImg}
      />
      <Box
        w='full'
        h='full'
        position='absolute'
        top='0'
        px='8'
        justifyContent='center'
      >
        <Heading>Sign Up </Heading>
        <VStack space={3} alignItems='center'>
          <Input
            InputLeftElement={
              <Icon
               
                name='email'
                size={size}
                color={COLORS.primary}
              />
            }
            variant='underlined'
            pl={3}
            type='text'
            placeholder='Username'
            w='90%'
            fontSize={18}
            borderBottomColor={COLORS.primary}
          />
          <Input
            InputLeftElement={
              <Icon
               
                name='email'
                size={size}
                color={COLORS.primary}
              />
            }
            variant='underlined'
            pl={3}
            type='text'
            placeholder='Email'
            w='90%'
            fontSize={18}
            borderBottomColor={COLORS.primary}
          />
           <Input
            InputLeftElement={
              <Icon
               
                name='eye'
                size={size}
                color={COLORS.primary}
              />
            }
            fontSize={18}
            variant='underlined'
            pl={3}
            type='password'
            placeholder='Password'
            w='90%'
            borderBottomColor={COLORS.primary}
          />
          
        </VStack>
        <Button
          _pressed={{
            bg: COLORS.secondary
          }}
          my={30}
          w='50%'
          rounded={50}
          bgColor={COLORS.primary
          }
          onPress={()=>navigation.navigate('Bottom')}
        >
          SIGN UP
        </Button>
        <Pressable 
          onPress={()=>navigation.navigate('Login')}
          mt={4}>
          <Text color={COLORS.primary} fontSize={20} >Login</Text>
         </Pressable>
      </Box>
     
    </Box>
  );
}
