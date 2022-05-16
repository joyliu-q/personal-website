import { NavBar } from '../../../components/NavBar'
import { Flex, Container } from '@chakra-ui/react'

export const BlogPageContainer = (props: any) => {
  return (
    <Flex flexDir="column" bgColor="#EEDDFF" minH="100vh">
      <NavBar currentPage={"/blog"}/>
      <Container bgColor="#FFFFFF" h="100%" p={4}>
        {props.children}
      </Container>
    </Flex>
  );
};
