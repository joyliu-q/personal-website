import { Container, Flex, Box, Link, useColorMode, Center } from '@chakra-ui/react'
import { GithubIcon, LinkedInIcon, THEME_COLORS, TwitterIcon } from '../../utils';
import Sign from '../../components/Sign';
import "./style.css";

export const ContactIcons = ({ size = "50px", animate = false, }: { size?: string, animate?: boolean }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex justifyContent={["center", "left"]} alignItems="center" flexWrap="wrap">
      <Link className={animate ? "scene_element scene_element--pop delay-_5s" : ""} href='https://github.com/joyliu-q' isExternal>
        <GithubIcon fill={colorMode === 'dark' ? THEME_COLORS.light : THEME_COLORS.dark} boxSize={size} />
      </Link>
      <Box p={2} />
      <Link className={animate ? "scene_element scene_element--pop delay-1s" : ""} href='https://www.linkedin.com/in/qijia-joy-liu/' isExternal>
        <LinkedInIcon fill={colorMode === 'dark' ? THEME_COLORS.light : THEME_COLORS.dark} boxSize={size} />
      </Link>
      <Box p={2} />
      <Link className={animate ? "scene_element scene_element--pop delay-1_5s" : ""} href='https://twitter.com/qjoyliu' isExternal>
        <TwitterIcon fill={colorMode === 'dark' ? THEME_COLORS.light : THEME_COLORS.dark} boxSize={size} />
      </Link>
    </Flex>
  )
}

export const SplashScreenSign = () => {

  return (
    <Flex flexDirection="column" flexDir="column" textTransform="uppercase">
      <Container
        display="flex"
        centerContent
        justifyContent="center"
        maxW="container.lg" maxH="100%"
        className="scene_element scene_element--fadeinup"
        minH="calc(100vh - 60px)"
        zIndex={1}
      >
        <Center position="absolute">
          <Flex position="absolute" width="50cqw" className="sign-container">
            <Sign />
          </Flex>
          <Flex
            display="flex" flexDir={['column', 'row']} position="relative"
            bottom="-5cqh" right="5cqw"
          >
              <ContactIcons animate />
          </Flex>
        </Center>
        
      </Container>
    </Flex >
  );
}
