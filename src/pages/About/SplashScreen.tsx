import { Container, Heading, Flex, Image, Center, Box, Link, useColorMode } from '@chakra-ui/react'
import React from 'react';
import { GithubIcon, LinkedInIcon, THEME_COLORS, TwitterIcon } from '../../utils';


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

export const SplashScreen = () => {
  const [showMe, setShowMe] = React.useState(Math.random() > 0.5 ? true : false);
  const { colorMode } = useColorMode()

  React.useEffect(() => {
    setShowMe(Math.random() > 0.5 ? true : false);
  }, [])
  return (
    <Flex flexDirection="column" flexDir="column" textTransform="uppercase" bgImage={`url(assets/splash-bg${colorMode === 'dark' ? '-dark' : ''}.svg)`} bgRepeat="no-repeat" bgSize="contain">
      <Container display="flex" justifyContent="center" alignContent="center" maxW="container.lg" className="scene_element scene_element--fadeinup" minH="calc(100vh - 60px)" maxH="100%" centerContent zIndex={1}>
        <Center display="flex" flexDir={['column', 'row']}>
          <Image
            rounded="50%"
            onMouseOver={() => {
              setShowMe(!showMe);
            }}
            onMouseLeave={() => {
              setShowMe(!showMe);
            }}
            src={showMe ? "assets/pic.png" : "assets/pfp.png"}
            boxSize='250px'
            p={4}
          />
          <Flex flexDir="column" justifyContent="center" alignContent="center">
            <Heading textAlign={["center", "left"]} as="h1" fontSize={["3xl", "72px"]}>
              Qijia “Joy” Liu
            </Heading>
            <Heading as="h3" size="md" fontWeight="normal" textAlign={['center', 'left']}>
              Developer • creator • Learner
            </Heading>
            <Box p={2} />
            <ContactIcons animate />
          </Flex>
        </Center>
      </Container>
    </Flex >
  );
}
