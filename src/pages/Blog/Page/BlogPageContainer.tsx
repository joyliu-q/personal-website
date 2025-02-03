import NavBar from '../../../components/NavBar'
import { Flex, Container } from '@chakra-ui/react'

export const BlogPageContainer = (props: any) => {

  return (
    <Flex flexDir="column" className='container-bg' minH="100vh" pt={10}>
      <NavBar currentPage={"/blog"} />
      <Flex p={[0, 4]} minH="calc(100vh - 60px)">
        <Container maxW='container.lg' className="card" p={[4, 8]} borderRadius={4}>
          {props.children}
        </Container>
      </Flex>
    </Flex>
  );
};
