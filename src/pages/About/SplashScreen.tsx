import { Container, Heading, Flex, Text, Image, Center, Box, Link } from '@chakra-ui/react'


const ContactIcons = () => {
  return (
    <Flex justifyContent={["center", "left"]} alignItems="center" flexWrap="wrap">
      <Link href='https://github.com/joyliu-q' isExternal>
        <Image src="/icons/github.svg" boxSize="50px" />  
      </Link>
      <Box p={2}/>
      <Link href='https://www.linkedin.com/in/qijia-joy-liu/' isExternal>
        <Image src="/icons/linkedin.svg" boxSize="50px" />  
      </Link>
      <Box p={2}/>
      <Link href='https://twitter.com/qjoyliu' isExternal>
        <Image src="/icons/twitter.svg" boxSize="50px" />  
      </Link>
    </Flex>
  )
}

export const SplashScreen = () => {
  return (
    <Flex py={20} flexDirection="column" flexDir="column" textTransform="uppercase" bgImage="url(splashBg.svg)" >
      <Container className="scene_element scene_element--fadeinup"  maxW="700px" maxH="100%" centerContent zIndex={1}>
        <Center display="flex" flexDir={['column', 'row']} justifyContent="center" alignContent="center">
          <Image src="pfp.jpeg" boxSize='200px' p={4}/>
          <Flex flexDir="column">
            <Heading as='h1' size='3xl'>
              Qijia “Joy” Liu
            </Heading>
            <Text>
              Developer • creator • Learner
            </Text>
            <Box p={2}/>
            <ContactIcons/>
          </Flex>
        </Center>
      </Container>
    </Flex>
  );
}
