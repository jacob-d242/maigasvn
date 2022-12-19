import { Text,Box} from 'native-base'
import React from 'react'
import {COLORS} from '../Constants/Index'
import Searchbar from '../Components/SearchBar'
export default function HomeScreen() {
  return (
    <Box flex={1} bg={COLORS.backgrounds}>
      <Searchbar/>
      <Text>HomeScreen</Text>
    </Box>
  )
}
