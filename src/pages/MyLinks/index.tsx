import { Heading, Flex, Container, VStack } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import { getLinks } from '../../utils';
import LinkCard from './LinkCard';

const MyLinks = (_props: any) => {
  return (
    <Flex flexDir="column" minH="100vh">
      <NavBar currentPage={"/projects"} />
      <Flex minH="calc(100vh - 60px)" className='container-bg' flexDir="column" >
        <Flex alignContent="center" justifyContent="center" p={[0, 4]}>
          <Container maxW='container.lg' bgColor="#FFFFFF" p={[4, 8]} borderRadius={4}>
            <Heading as='h1' fontSize="6xl">
              My Short Links
            </Heading>
            <VStack>
              {getLinks().map(link => <LinkCard link={link} />)}
            </VStack>
          </Container>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MyLinks;