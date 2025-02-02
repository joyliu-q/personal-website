import { Flex, Grid, Heading } from '@chakra-ui/react'
import { PROJECT_LIST } from '../../pages/Projects/data'
import { ProjectRow } from '../../pages/Projects/ProjectCard'

export const ProjectPreview = ({isDark = false}: {isDark?: boolean}) => {
  const featuredProjects = PROJECT_LIST.slice(0, 3)

  return (
    <Flex flexDir="column" width="100%">
      <Flex py={2} px={4} alignContent="center" flexDir="column">
        <Flex as="a" href="/projects" className="card btn" p={4} my={4} width="100%" textAlign="center" justifyContent={"center"}>
          <Heading size="lg">
            Recent Projects
          </Heading>
        </Flex>
      </Flex>
      <Grid 
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        gap={4}
        px={4}
      >
        {featuredProjects.map(project => (
          <ProjectRow 
            key={project.title}
            project={project}
            isDark={isDark}
          />
        ))}
      </Grid>
    </Flex>
  )
}