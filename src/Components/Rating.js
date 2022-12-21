import { HStack } from 'native-base';
import React from 'react';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function Rating({value}) {
    const size = 22

    return (
        <HStack space={0.4} mt={2} alignItems='center'>
            <Icon
                size={size}
                name={value >= 1 ? 'star' : value >= 0.5 ? 'star-haif-o' : 'start-haif-o'}
                color='#FFD700'
            />
             <Icon
                size={size}
                name={value >= 2 ? 'star' : value >= 1.5 ? 'star-haif-o' : 'start-haif-o'}
                color='#FFD700'
            />
             <Icon
                size={size}
                name={value >= 3 ? 'star' : value >= 2.5 ? 'star-haif-o' : 'start-haif-o'}
                color='#FFD700'
            />
             <Icon
                size={size}
                name={value >= 4 ? 'star' : value >= 3.5 ? 'star-haif-o' : 'start-haif-o'}
                color='#FFD700'
            />
             <Icon
                size={size}
                name={value >= 5 ? 'star' : value >= 4.5 ? 'star-haif-o' : 'start-haif-o'}
                color='#FFD700'
            />
        </HStack>

    );
}
