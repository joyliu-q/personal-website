import { NavBar } from '../../../components/NavBar'
import { Flex, Container } from '@chakra-ui/react'

export const BlogPageContainer = (props: any) => {
  return (
    <Flex flexDir="column" bgColor="#1E1E1E" minH="100vh">
      <NavBar currentPage={"/blog"}/>
      <Container  maxW='container.lg' bgColor="#FFFFFF" h="100vh" p={4}>
        {props.children}
      </Container>
    </Flex>
  );
};
