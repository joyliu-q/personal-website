import { Heading, Flex, Container, useColorMode } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import { getExtendedThemeColors } from '../../utils';
import ProjectList from './ProjectList';

export const Projects = (_props: any) => {
  const { colorMode } = useColorMode()

  return (
    // TODO: border controlled by this line
    <Flex flexDir="column" minH="100vh" bgColor={getExtendedThemeColors(colorMode == 'dark').greyLight1}>
      <NavBar currentPage={"/projects"} />
      <Container maxW="container.xl" minH="calc(100vh - 60px)" className='container-bg' flexDir="column">
        <Flex alignContent="center" justifyContent="center" p={4}>
          <Flex maxW='container.lg' p={[4, 6]} borderRadius={4} className="card" width="100%">
            <Flex className="card-inner" p={4} width="100%">
              <Heading as='h1' fontSize="4xl" width="100%" textAlign={"center"}>
                Projects
              </Heading>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignContent="center" my={4} width="100%">
          <Container maxW='container.lg' p={0}>
            <ProjectList />
          </Container>
        </Flex>
      </Container>
    </Flex >
  );
};
