import NavBar from '../../../components/NavBar'
import { Flex, Container, HStack, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const BlogPageContainer = (props: any) => {
  const navigate = useNavigate();

  return (
    <Flex flexDir="column" className='container-bg' minH="100vh" pt={10}>
      <NavBar currentPage={"/blog"} />
      <Flex p={[0, 4]} minH="calc(100vh - 60px)">
        <Container maxW='container.lg' className="card" p={[4, 8]} borderRadius={4}>
          <HStack mb={2} spacing={4}>
            <Link
              onClick={() => navigate('/blog')}
              cursor="pointer"
              fontSize="sm"
              fontWeight="normal"
              color="gray.600"
              _hover={{ 
                color: 'gray.800',
                transform: 'translateX(-2px)',
                transition: 'all 0.2s ease'
              }}
              transition="all 0.2s ease"
              textDecoration="none"
            >
              ← Back
            </Link>
          </HStack>
          {props.children}
        </Container>
      </Flex>
    </Flex>
  );
};
