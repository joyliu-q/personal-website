//import React from 'react';
import { NavBar } from '../../components/NavBar'
//import { Footer } from '../../components/Footer'
import { Container, Heading, Flex, Text, Image, Center, Link, Box } from '@chakra-ui/react'

const ContactIcons = () => {
  return (
    <Flex direction={['column', 'row']} justifyContent={["center", "left"]} alignItems="center" flexWrap="wrap">
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

const SplashScreen = () => {
  return (
    <Flex py={20} flexDirection="column" flexDir="column" textTransform="uppercase" bgImage="url(splashBg.svg)" >
      <Container maxW="700px" maxH="100%" centerContent zIndex={1}>
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

export const About = (_props: any) => {
  return (
    <Flex flexDir="column" bgColor="#EEDDFF" minH="100vh">
      <NavBar currentPage='/'/>
      <SplashScreen/>
      <Container p={4} bgColor="#FFFFFF" zIndex={1}>
        <Text>
          Hello! I am Joy, a student at the University of Pennsylvania’s 
          Management and Technology Program, double majoring in Computer Science and business.
        </Text>
        <Box p={2}/>
        <Text>
          Check out my <Link href='https://github.com/joyliu-q' isExternal fontWeight="bold">Github</Link>, 
          add me on <Link href='https://www.linkedin.com/in/qijia-joy-liu/' isExternal fontWeight="bold">LinkedIn</Link>, or 
          follow me on <Link href='https://twitter.com/qjoyliu' isExternal fontWeight="bold">Twitter</Link> to learn more about me and my work.
        </Text>
      </Container>
    </Flex>
  );
};
