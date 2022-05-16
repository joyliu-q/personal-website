import { Flex, Image, Link, Text, Box } from '@chakra-ui/react'

export const NavBar = ({ currentPage }: { currentPage: string }) => {
  return (
    <Flex py={2} px={4} textTransform="uppercase" fontSize="xl" bgColor="#EEDDFF" h="60px" alignContent="center">
      <Link href='/' display={["none", "block"]} width="50px" height="50px">
        <Image src="/logo.svg" boxSize="50px" />
      </Link>
      <Box p={4} display={["none", "block"]}/>
      <Link href='/' fontWeight={
        currentPage === '/' ? 'bold' : 'normal'
      } display="flex" flexDir="column" justifyContent="center">
        <Text as="a">About</Text>
      </Link>
      <Box p={4} />
      <Link href='/projects' fontWeight={
        currentPage === '/projects' ? 'bold' : 'normal'
      } display="flex" flexDir="column" justifyContent="center">
        <Text as="a" variant="link">Projects</Text>
      </Link>
      <Box p={4} />
      <Link href='/blog' fontWeight={
        currentPage === '/blog' ? 'bold' : 'normal'
      } display="flex" flexDir="column" justifyContent="center">
        <Text as="a" variant="link">Blog</Text>
      </Link>
    </Flex>
  )
}