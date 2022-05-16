import { Center, Flex, Heading, Text } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"

export const NotFoundPage = () => {
  return (
    <Flex flexDir="column">
      <NavBar currentPage="/"/>
      <Center minH="calc(100vh - 60px)" display="flex" flexDir="column">
        <Heading>404</Heading>
        <Text>Page not found.</Text>
      </Center>
    </Flex>
  )
}