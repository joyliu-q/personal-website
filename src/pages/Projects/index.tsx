import { Heading, Flex, Container, Link } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import ProjectList from './ProjectList';

export const Projects = (_props: any) => {
  return (
    <Flex flexDir="column" minH="100vh">
      <NavBar currentPage={"/projects"} />
      <Flex minH="calc(100vh - 60px)" className='container-bg' flexDir="column" >
        <Flex alignContent="center" justifyContent="center" p={[0, 4]}>
          <Container maxW='container.lg' bgColor="#FFFFFF" p={[4, 8]} borderRadius={4}>
            <Heading as='h1' fontSize="6xl">
              Projects: Coming Soon!
            </Heading>
            <Heading variant="subtitle" fontWeight={300}>Meanwhile, checkout my <Link href='https://github.com/joyliu-q?tab=repositories' isExternal fontWeight="bold">Github Projects</Link> :D</Heading>
          </Container>
        </Flex>
        <Flex alignContent="center" justifyContent="center" p={[0, 4]}>
          <Flex alignContent="center" my={4} width="100%">
            <Container maxW='container.lg' p={0}>
              <ProjectList />
              {/* <Text fontSize="20px" width="300px" whiteSpace={"pre-wrap"}>
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
            </Text> */}
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
