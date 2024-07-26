// import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Heading } from "@chakra-ui/react"
import { Flex, Grid } from "@chakra-ui/react"
import { PROJECT_LIST } from "./data"
import { ProjectCard, ProjectRow } from "./ProjectCard"

// TODO: standardize & move project header/button to separate component
// TODO: create a json list for project data & populate using map

export default ({isDark = false}: {isDark: boolean}) => {
  return (
    <Grid templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)"
    }} gap={4}>
      {PROJECT_LIST.map(project =>
        <>
          <Flex display={['none', 'inherit']}>
            <ProjectRow project={project} isDark={isDark} />
          </Flex>
          <Flex display={['inherit', 'none']}>
            <ProjectCard project={project} isDark={isDark} />
          </Flex>
        </>)}
    </Grid>
  )
}