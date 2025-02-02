import { Flex, Heading, HStack, Image, Link, VStack } from "@chakra-ui/react"
import { Project } from "./data"
import { LinkIcon } from '@chakra-ui/icons'
import { GithubIcon, getExtendedThemeColors } from "../../utils"


export const ProjectRow = ({ project, isDark = false }: { project: Project, isDark?: boolean }) => {
  
  return (
    <Flex
      flexDir="column"
      className="card"
      width="100%"
      alignItems="end"
      pb={2}
    >
      {/* {project.image &&
        <Flex overflow="clip" maxW={"200px"} bg={project.image} bgSize="cover" backdropFilter="blur(8px)" className="card-inner" width="100%" borderRadius={4} justifyContent="center" alignItems="center">
          <Image flexGrow={1} src={project.image} filter="none" />
        </Flex>} */}
      <VStack
        backgroundImage={project.image ? `url(${project.image})` : undefined}
        backdropFilter="blur(100px)" 
        bgSize="cover"
        justifyContent="center" alignItems="center"
        flexGrow={2} m={[2, 4]} borderRadius={4}
        {
        ...project.image && {
          boxShadow: `inset 0 0 0 2000px ${project.colorOverride ?? (isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)")}`
        }}
      >
        <Flex
          p={[2, 4]}
          width="100%"
          flexDir="column"
        >
          <Flex
          flexDir={['column', 'row']} justifyContent={"space-between"} width="100%" maxHeight="100px">
          <Heading fontSize={
            project.title.length > 20 ? "xl" : "2xl"
          } as="a" href={project.link}>{project.title}</Heading>
          
        </Flex>
        <Flex>
          {project.description}
        </Flex>
        </Flex>
        
      </VStack>
      {(project.link || project.github) &&
        <HStack borderRadius="24px" backgroundColor={getExtendedThemeColors(isDark).lightAccent
        } px={2} py={1} me={4}>
          {project.link && <Link className={"scene_element scene_element--pop delay-_5s"} href={project.link} isExternal>
            <LinkIcon boxSize={["12px", "24px"]} color={getExtendedThemeColors(isDark).primary} />
          </Link>}
          {project.github && <Link className={"scene_element scene_element--pop delay-_5s"} href={project.github} isExternal>
            <GithubIcon boxSize={["12px", "24px"]} color={getExtendedThemeColors(isDark).greyDark} fill={getExtendedThemeColors(isDark).primary} />
          </Link>}
        </HStack>
      }
    </Flex >
  )
}

export const ProjectCard = ({ isDark = false, project }: { isDark?: boolean, project: Project }) => {
  return (
    <Flex className="card" borderRadius={4} maxWidth="500px">
      <VStack flexGrow={2} className="card-inner" m={[2, 4]} borderRadius={4}>
        {project.image && <Flex overflow="clip" flexGrow={1} bg={project.image} bgSize="cover" backdropFilter="blur(8px)" className="card-inner" width="100%" borderRadius={4} justifyContent="center" alignItems="center">
          <Image flexGrow={1} src={project.image} filter="none" />
        </Flex>}
        <Flex p={[4, 8]} flexDir="column">
          <Flex flexDir={['column', 'row']} justifyContent={"space-between"} width="100%" maxHeight="100px">
            <Heading
              fontSize={
                project.title.length > 20 ? "l" : "xl"
              }
              as="a" href={project.link}>{project.title}</Heading>
            <HStack>
              {project.link && <Link className={"scene_element scene_element--pop delay-_5s"} href={project.link} isExternal>
                <LinkIcon boxSize={["12px", "24px"]} color={getExtendedThemeColors(isDark).greyDark} _hover={{ color: getExtendedThemeColors(isDark).primary }} />
              </Link>}
              {project.github && <Link className={"scene_element scene_element--pop delay-_5s"} href={project.github} isExternal>
                <GithubIcon boxSize={["12px", "24px"]} color={getExtendedThemeColors(isDark).greyDark} fill={getExtendedThemeColors(isDark).greyDark} _hover={{ color: getExtendedThemeColors(isDark).primary, fill: getExtendedThemeColors(isDark).primary }} />
              </Link>}
            </HStack>
          </Flex>
          <Flex>
            {project.description}
          </Flex>
        </Flex>
      </VStack>
    </Flex >
  )
}