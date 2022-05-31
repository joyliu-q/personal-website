import { Box, Flex, Text } from '@chakra-ui/react'
import { ContactIcons } from '../pages/About/SplashScreen'

export default () => {
  return (
    <Flex p={4} bgColor="#EEDDFF" minH="50px" justifyContent="center" alignItems="center" flexDir="column">
      <ContactIcons size='25px' />
      <Box p={0.5} />
      <Text fontWeight="bold">
        Made by Joy :D
      </Text>
    </Flex>
  )
};