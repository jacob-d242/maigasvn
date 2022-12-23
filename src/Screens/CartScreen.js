import { Box, Center, Text } from 'native-base';
import React from 'react';

export default function CartScreen() {
  return (
    <Box safeAreaTop flex={1}>
      <Center w='full' py={5}>
        <Text  fontSize={25}  bold>CartScreen</Text>
      </Center>
    </Box>
  );
}
