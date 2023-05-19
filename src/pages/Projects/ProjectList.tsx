// import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Heading } from "@chakra-ui/react"
import { Flex, VStack } from "@chakra-ui/react"
import { PROJECT_LIST } from "./data"
import { ProjectCard, ProjectRow } from "./ProjectCard"

// TODO: standardize & move project header/button to separate component
// TODO: create a json list for project data & populate using map

export default () => {
  return (
    <VStack spacing={8}>
      {PROJECT_LIST.reverse().map(project =>
        <>
          <Flex display={['none', 'inherit']}>
            <ProjectRow project={project} />
          </Flex>
          <Flex display={['inherit', 'none']}>
            <ProjectCard project={project} />
          </Flex>
        </>)}
    </VStack>
  )
}