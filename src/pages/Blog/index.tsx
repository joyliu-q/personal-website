import { NavBar } from '../../components/NavBar'
import { Heading, Flex, Container, Text, Link, Box } from '@chakra-ui/react'

export * from './Page';

export const BLOGS = {
  "example-1": {
    "title": "Example blog",
    "date": "2022-05-15",
    "path": "example-1.md",
  },
}

export const Blog = (_props: any) => {
  return (
    <Flex flexDir="column" bgColor="#EEDDFF" minH="100vh">
      <NavBar currentPage='/blog'/>
      <Container bgColor="#FFFFFF" p={4} minH="50vh">
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