import { Flex, Image, Link, Text, Box } from '@chakra-ui/react'

export const NavBar = ({ currentPage }: { currentPage: string }) => {
  return (
    <Flex p={4} textTransform="uppercase" fontSize="xl">
      <Link href='/'>
        <Image src="/logo.svg" boxSize="50px" />
      </Link>
      <Box p={4} />
      <Link href='/' fontWeight={
        currentPage === '/' ? 'bold' : 'normal'
      }>
        <Text as="a">About</Text>
      </Link>
      <Box p={4} />
      <Link href='/projects' fontWeight={
        currentPage === '/projects' ? 'bold' : 'normal'
      }>
        <Text as="a" variant="link">Projects</Text>
      </Link>
      <Box p={4} />
      <Link href='/blog' fontWeight={
        currentPage === '/blog' ? 'bold' : 'normal'
      }> {/* TODO */}
        <Text as="a" variant="link">Blog</Text>
      </Link>
    </Flex>
  )
}