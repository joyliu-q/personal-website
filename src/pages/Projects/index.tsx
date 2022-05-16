import { Heading, Flex, Container, Text, Link, Box } from '@chakra-ui/react'
import { NavBar } from '../../components/NavBar'

export const Projects = (_props: any) => {
  return (
    <Flex flexDir="column" minH="100vh">
      <NavBar currentPage={"/projects"}/>
      <Flex alignContent="center" justifyContent="center" minH="calc(100vh - 60px)" bgColor="#333333">
        <Container maxW="container.lg" className="scene_element scene_element--flip" bgColor="#FFFFFF" my={4} p={4}>
          <Heading as='h1' fontSize="6xl">
            Coming Soon!
          </Heading>
          <Text>
            Meanwhile, checkout my <Link href='https://github.com/joyliu-q?tab=repositories' isExternal fontWeight="bold">Github Projects</Link> :D
          </Text>
          <Flex alignContent="center" my={4}>
            <Text fontSize="20px" width="300px" whiteSpace={"pre-wrap"}>
            {`
            ⊂ヽ
            　 ＼＼ Λ＿Λ
            　　 ＼( 'ㅅ' )
            　　　 >　⌒ヽ have
            　　　/ 　 へ ＼ a 
            　　 /　　/　＼＼ good 
            　　 ﾚ　ノ　　 ヽつ day 
            　　/　/
            　 /　/|
            　(　(ヽ
            　|　|、＼
            　| 丿 ＼ ⌒)
            　| |　　) )
            ⊂ヽ
            `}
            </Text>
          </Flex>
          <Box p={2}/>
        </Container>
      </Flex>
    </Flex>
  );
};
