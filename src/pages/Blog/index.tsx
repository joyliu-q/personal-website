import { Heading, Flex, Container, Text, Link, Box } from '@chakra-ui/react'
import { NavBar } from '../../components/NavBar'
import { BLOGS } from './entries';

export * from './Page';
export * from './entries';

export const Blog = (_props: any) => {
  return (
    <Flex flexDir="column" bgColor="#EEDDFF" minH="100vh">
      <NavBar currentPage='/blog'/>
      <Container className="scene_element scene_element--fadeinup" bgColor="#FFFFFF" p={4} minH="50vh">
        <Heading as="h1">My Blog</Heading>
        <Text>Cool things I want to talk about</Text>
        <Box p={4}/>
        {Object.entries(BLOGS).map(([key, value]) => {
          return (
            <Flex key={key} justifyContent="space-between">
              <Link href={`/blog/${key}`}>
                <Text as="h4" fontWeight="bold">{value.title}</Text>
              </Link>
              <Text>{value.date}</Text>
            </Flex>
        )})}
      </Container>
    </Flex>
  );
}