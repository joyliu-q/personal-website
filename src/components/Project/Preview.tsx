import { Flex, Text, Heading } from '@chakra-ui/react'

export const ProjectPreview = () => {
  return (
    <Flex py={2} px={4} bgColor="#BA9BE3" alignContent="center" flexDir="column">
      <Heading as="h2" textTransform="uppercase">
        Project Preview
      </Heading>
      <Text>Cool projects I've been working on :D</Text>
    </Flex>
  )
}