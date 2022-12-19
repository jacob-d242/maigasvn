import { Button } from 'native-base';
import React from 'react';

export default function MinBtn({ mt, bg, color, children, onPress }) {
    return (
        <Button
            w='full'
            h={55}
            mt={mt}
            rounded='full'
            bg={bg}
            _text={{
                fontSize:'22',
                color: color,
                fontFamily:'Raleway-Light'
            }}
            _pressed={{
                bg:bg
            }}
            onPress={onPress}
        >
            { children }
        </Button>
    );
}
