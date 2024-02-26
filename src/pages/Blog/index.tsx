import { Heading, Flex, Container, Text, Link, VStack, useColorMode, Image } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import { getExtendedThemeColors } from '../../utils';
import { BLOGS } from './entries';

export * from './Page';
export * from './entries';

export const Blog = (_props: any) => {
  const { colorMode } = useColorMode()

  return (
    <Flex flexDir="column" className='container-bg' minH="100vh">
      <NavBar currentPage='/blog' />
      <Flex px={[0, 4]} flexDir="column" bgColor={getExtendedThemeColors(colorMode === 'dark').greyLight1}>
        <Container maxW="container.xl" bgColor={getExtendedThemeColors(colorMode === 'dark').greyLight1}>
          <Flex alignContent="center" justifyContent="center" p={4}>
            <Flex maxW='container.lg' p={[4, 6]} borderRadius={4} className="card" width="100%">
              <Flex className="card-inner" p={4} width="100%">
                <Heading as='h1' fontSize="4xl" width="100%" textAlign={"center"}>
                  My Blog
                </Heading>
              </Flex>
            </Flex>
          </Flex>
          <Container my={4} maxW="container.lg" className="card" p={4} borderRadius={4}>
            <VStack p={4} className="card-inner" alignItems="start" spacing={8}>
              {Object.entries(BLOGS).map(([key, value]) => {
                return (
                  <Flex width="100%" key={key} justifyContent="space-between" fontSize="20px">
                    <Flex flexDir="column">
                      <Link variant="ghost" href={value.isExternal ? value.path : `/blog/${key}`}>
                        <Text fontWeight="bold"><Text as="span" fontWeight="light">{value.isExternal ? "(External) " : ""}</Text>{value.title}</Text>
                      </Link>
                      <Text fontSize="sm">{value.subtitle}</Text>
                    </Flex>
                    <Flex display={["none", "flex"]}>
                      <Text minW="100px">{value.date}</Text>
                    </Flex>
                  </Flex>
                )
              })}
            </VStack>
            <Flex justifyContent={"center"} width="100%" p={4}>
              <Image boxSize={"400px"} src={`/assets/joy.svg`} />
            </Flex>
          </Container>
        </Container>
      </Flex >
    </Flex >
  );
}