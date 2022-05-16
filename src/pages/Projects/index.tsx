import { Heading, Flex, Container, Text, Link, Box } from '@chakra-ui/react'
import { NavBar } from '../../components/NavBar'

export const Projects = (_props: any) => {
  return (
    <Flex flexDir="column" bgColor="#EEDDFF" minH="100vh">
      <NavBar currentPage={"/projects"}/>
      <Container className="scene_element scene_element--fadeinup" bgColor="#FFFFFF" h="100%" p={4}>
        <Heading as='h1'>
          Coming Soon!
        </Heading>
        <Text>
          Meanwhile, checkout my <Link href='https://github.com/joyliu-q?tab=repositories' isExternal fontWeight="bold">Github Projects</Link> :D
        </Text>
        <Text whiteSpace={"pre-wrap"}>
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
        <Box p={2}/>
      </Container>
    </Flex>
  );
};
