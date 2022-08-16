import { Flex, Link, Text } from '@chakra-ui/react'

type NavTheme = 'light' | 'dark'

export default ({ currentPage, theme = 'light' }: { currentPage: string, theme?: NavTheme }) => {
  return (
    <Flex py={2} px={4} textTransform="uppercase" fontSize="xl"
      bgColor={theme === 'light' ? "#EEDDFF" : '#333333'} h="60px" alignContent="center"
      textColor={theme === 'light' ? '#333333' : '#FFFFFF'}>
      <Link href='/' fontWeight={
        currentPage === '/' ? 'bold' : 'normal'
      } display="flex" flexDir="column" justifyContent="center">
        <Text as="a">Short Links</Text>
      </Link>
      {/* <Box p={4} display={["none", "block"]} />
      <Link href='/create' fontWeight={
        currentPage === '/create' ? 'bold' : 'normal'
      } display="flex" flexDir="column" justifyContent="center">
        <Text as="a">Create</Text>
      </Link> */}
    </Flex>
  )
}