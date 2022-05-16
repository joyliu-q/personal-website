import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ContactIcons } from '../pages/About/SplashScreen'

export class Footer extends React.Component{
    render() {
        return (
            <Flex p={4} bgColor="#EEDDFF" minH="50px" justifyContent="center" alignItems="center">
                <Text fontWeight="bold">
                    Made by Joy :D
                </Text>
                <Box p={2}/>
                <ContactIcons size='25px'/>
            </Flex>
        )
    };
}