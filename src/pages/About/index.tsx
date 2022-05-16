import { Container, Flex, Text, Link, Box } from '@chakra-ui/react'
import { NavBar } from '../../components/NavBar'
import { SplashScreen } from './SplashScreen';

export const About = (_props: any) => {
  return (
    <Flex flexDir="column" bgColor="#EEDDFF" minH="100vh">
      <NavBar currentPage='/'/>
      <SplashScreen/>
      <Container p={4} bgColor="#FFFFFF" zIndex={1}>
        <Text>
          Hello! I am Joy, a student at the University of 
          Pennsylvania’s <Link textColor="#741D7B" href="https://fisher.wharton.upenn.edu/" isExternal>Jerome Fisher Program in Management and Technology</Link> pursuing a B.S.E. in Computer Science and B.S. in Economics from Wharton.
        </Text>
        <Box p={2}/>
        <Text>
          Currently, I am an incoming STEP intern at Google, as well as a DevOps engineer 
            at <Link textColor="#741D7B" href="https://pennlabs.org/" isExternal>Penn Labs</Link> and Head of Logistics
            at <Link textColor="#741D7B" href="https://pennapps.com/" isExternal>PennApps</Link>.
            In the past, I was a <Link textColor="#741D7B" href="https://summerofcode.withgoogle.com/">GSoC</Link> contributer for <Link textColor="#741D7B" href="https://www.cncf.io/" isExternal>CNCF</Link> <Link href="https://in-toto.io/" textColor="#741D7B" isExternal>in-toto</Link>. Outside of work, I love drawing, hiking, and hackathons!
        </Text>
        <Box p={2}/>
        <Text>
          Check out my <Link href='https://github.com/joyliu-q' isExternal textColor="#741D7B">Github</Link>, 
          add me on <Link href='https://www.linkedin.com/in/qijia-joy-liu/' isExternal textColor="#741D7B">LinkedIn</Link>, or 
          follow me on <Link href='https://twitter.com/qjoyliu' isExternal textColor="#741D7B">Twitter</Link> to learn more about me and my work.
        </Text>
      </Container>
    </Flex>
  );
};
