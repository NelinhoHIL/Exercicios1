import React from 'react';
import { Text } from 'react-native';

export default props => {              
        return (
            <>
                <Text>Mebros da Família</Text>
                {props.children}
            </>
        )
}