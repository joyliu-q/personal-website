import { Flex, Heading, HStack, Image, Link, VStack } from "@chakra-ui/react"
import { Project } from "./data"
import { LinkIcon } from '@chakra-ui/icons'
import { GithubIcon, getExtendedThemeColors } from "../../utils"

export const ProjectRow = ({ project, isDark = false }: { project: Project, isDark?: boolean }) => {
  return (
    <Flex className="card" borderRadius={4} width="100%">
      <Flex flexGrow={1} bg={project.image} bgSize="cover" backdropFilter="blur(8px)" className="card-inner" m={[2, 4]} width="100%" borderRadius={4} justifyContent="center" alignItems="center">
        <Image src={project.image} filter="none" />
      </Flex>
      <VStack flexGrow={2} p={[4, 8]} className="card-inner" m={[2, 4]} borderRadius={4}>
        <Flex justifyContent={"space-between"} width="100%" maxHeight="100px">
          <Heading as="a" href={project.link}>{project.title}</Heading>
          <HStack>
            {project.link && <Link className={"scene_element scene_element--pop delay-_5s"} href={project.link} isExternal>
              <LinkIcon boxSize="25px" color={getExtendedThemeColors(isDark).greyDark} />
            </Link>}
            {project.github && <Link className={"scene_element scene_element--pop delay-_5s"} href={project.github} isExternal>
              <GithubIcon boxSize={"25px"} color={getExtendedThemeColors(isDark).greyDark} fill={getExtendedThemeColors(isDark).greyDark} />
            </Link>}
          </HStack>
        </Flex>
        <Flex fontSize="xl">
          {project.description}
        </Flex>
      </VStack >
    </Flex >
  )
}

export const ProjectCard = ({ isDark = false, project }: { isDark?: boolean, project: Project }) => {
  return (
    <Flex className="card" borderRadius={4} maxWidth="500px">
      <VStack flexGrow={2} className="card-inner" m={[2, 4]} borderRadius={4}>
        <Flex overflow="clip" flexGrow={1} bg={project.image} bgSize="cover" backdropFilter="blur(8px)" className="card-inner" width="100%" borderRadius={4} justifyContent="center" alignItems="center">
          <Image flexGrow={1} src={project.image} filter="none" />
        </Flex>
        <Flex p={[4, 8]} flexDir="column">
          <Flex justifyContent={"space-between"} width="100%" maxHeight="100px">
            <Heading as="a" href={project.link}>{project.title}</Heading>
            <HStack>
              {project.link && <Link className={"scene_element scene_element--pop delay-_5s"} href={project.link} isExternal>
                <LinkIcon boxSize="25px" color={getExtendedThemeColors(isDark).greyDark} _hover={{ color: getExtendedThemeColors(isDark).primary }} />
              </Link>}
              {project.github && <Link className={"scene_element scene_element--pop delay-_5s"} href={project.github} isExternal>
                <GithubIcon boxSize={"25px"} color={getExtendedThemeColors(isDark).greyDark} fill={getExtendedThemeColors(isDark).greyDark} _hover={{ color: getExtendedThemeColors(isDark).primary, fill: getExtendedThemeColors(isDark).primary }} />
              </Link>}
            </HStack>
          </Flex>
          <Flex fontSize="xl">
            {project.description}
          </Flex>
        </Flex>
      </VStack >
    </Flex >
  )
}