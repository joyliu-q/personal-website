// import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Heading } from "@chakra-ui/react"
import { Flex, Grid } from "@chakra-ui/react"
import { PROJECT_LIST } from "./data"
import { ProjectCard, ProjectRow } from "./ProjectCard"
import { ProjectLabel } from "./data"

// TODO: standardize & move project header/button to separate component
// TODO: create a json list for project data & populate using map

interface ProjectListProps {
  isDark: boolean;
  searchQuery: string;
  selectedLabels: ProjectLabel[];
}

export default ({ isDark = false, searchQuery = '', selectedLabels = [] }: ProjectListProps) => {
  const filteredProjects = PROJECT_LIST.filter(project => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchLower) ||
      (typeof project.description === 'string' && 
        project.description.toLowerCase().includes(searchLower));
    
    const matchesLabels = 
      selectedLabels.length === 0 || 
      selectedLabels.some(label => project.labels?.includes(label));

    return matchesSearch && matchesLabels;
  });

  return (
    <Grid templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)"
    }} gap={4}>
      {filteredProjects.map(project =>
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