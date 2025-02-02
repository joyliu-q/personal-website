import { Container, Flex, Text, Link, Box, Heading, useColorMode } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import { THEME_COLORS, getExtendedThemeColors } from '../../utils';
// import ProjectCarousel from '../Projects/ProjectCarousel';
import { ProjectPreview } from '../../components/Project/Preview';
import { SplashScreen } from './SplashScreen';
import SunflowerBackground from '../../components/SunflowerBackground';

export const About = (_props: any) => {
  const { colorMode } = useColorMode()

  return (
    <Flex flexDir="column" bgColor={colorMode === 'dark' ? getExtendedThemeColors(true).greyLight3 : THEME_COLORS.lightAccent} minH="100vh">
      <NavBar currentPage='/' />
      <Box 
        position="fixed"
        width="100vw"
        left="0"
        top="0"
        zIndex="0"
        overflow="visible"
      >
        <SunflowerBackground isDark={colorMode === 'dark'} />
      </Box>
      <SplashScreen />
      <Flex bgColor={getExtendedThemeColors(colorMode === 'dark').greyLight1} className="block" mb={10}>
        <Container py={10} zIndex={1} fontSize="lg">
          <Heading>
            Hello! I'm Joy.
          </Heading>
          <Text>
            I'm a senior at the University of
            Pennsylvania’s <Link variant="ghost" href="https://fisher.wharton.upenn.edu/" isExternal>Jerome Fisher Program in Management and Technology</Link> pursuing a B.S.E. in Computer Science and B.S. in Economics from Wharton.
          </Text>
          <Box p={2} />
          <Text>
            Check out my <Link href='https://github.com/joyliu-q' isExternal variant="ghost">Github</Link>,
            add me on <Link href='https://www.linkedin.com/in/qijia-joy-liu/' isExternal variant="ghost">LinkedIn</Link>, or
            follow me on <Link href='https://twitter.com/qjoyliu' isExternal variant="ghost">Twitter</Link> to learn more about me and my work.
          </Text>
        </Container>
      </Flex>
      <Container maxW="container.lg" px={4} borderRadius={4} flexDir="column" justifyContent={"center"} alignItems="center" >
        <ProjectPreview isDark={colorMode === 'dark'} />
      </Container>
    </Flex>
  );
};
