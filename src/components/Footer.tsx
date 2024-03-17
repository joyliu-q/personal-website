import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import { ContactIcons } from '../pages/About/SplashScreen'
import { getExtendedThemeColors, THEME_COLORS } from '../utils';

export default () => {
  const { colorMode } = useColorMode()

  return (
    <Flex p={4} bgColor={colorMode === 'dark' ? getExtendedThemeColors(true).greyLight3 : THEME_COLORS.lightAccent}
      minH="50px" justifyContent="center" alignItems="center" flexDir="column">
      <ContactIcons size='25px' />
      <Box p={0.5} />
      <Text fontWeight="bold">
        Made by Joy and <a href="https://julianweng.com">Julian Weng</a>, with help from Anthony Li :D
      </Text>
    </Flex>
  )
};