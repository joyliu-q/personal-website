import { NavBar } from '../../../components/NavBar'
import { Flex, Container } from '@chakra-ui/react'

export const BlogPageContainer = (props: any) => {
  return (
    <Flex flexDir="column" className='container-bg' bgColor="#BA9BE3" minH="100vh">
      <NavBar currentPage={"/blog"}/>
      <Container  maxW='container.lg' bgColor="#FFFFFF" minH="100vh" p={4}>
        {props.children}
      </Container>
    </Flex>
  );
};
