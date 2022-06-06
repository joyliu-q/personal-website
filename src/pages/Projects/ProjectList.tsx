import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Heading } from "@chakra-ui/react"
import ProjectCard from "./ProjectCard"

// TODO: standardize & move project header/button to separate component
// TODO: create a json list for project data & populate using map

export default () => {
  return (
    <Accordion defaultIndex={[0, 1]} width="100%" p={0} m={0} allowToggle allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton bgColor="#333333" textColor="#FFFFFF" _hover={{
            bgColor: "#333333"
          }}>
            <Box flex='1' textAlign='left'>
              <Heading variant="subtitle">
                Project 1 title
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ProjectCard>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </ProjectCard>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton bgColor="#333333" textColor="#FFFFFF" _hover={{
            bgColor: "#333333"
          }}>
            <Box flex='1' textAlign='left'>
              <Heading variant="subtitle">
                Project 2 title
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ProjectCard>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </ProjectCard>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}