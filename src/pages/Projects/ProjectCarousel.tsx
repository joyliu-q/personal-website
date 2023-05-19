// import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Heading } from "@chakra-ui/react"
import { PROJECT_LIST } from "./data"
import { ProjectCard } from "./ProjectCard"
import "./carousel.scss";
import { Flex, Heading } from "@chakra-ui/react";

// TODO: standardize & move project header/button to separate component
// TODO: create a json list for project data & populate using map

export default () => {
  return (
    <>
      <figure className="carousel-cards">
        <div className="carousel-cards__content">
          {PROJECT_LIST.slice(-3).map(project =>
            <div className="carousel-cards__item d-flex align-items-center justify-content-center">
              <ProjectCard project={project} />
            </div>
          )}
        </div>
      </figure>
      <Flex as="a" href="/projects" className="card btn btn__secondary" zIndex={2} p={4} mb={6} textAlign="center" justifyContent={"center"}>
        <Heading size="md">
          See More Projects
        </Heading>
      </Flex>
    </>

    // <VStack spacing={8}>
    //   {PROJECT_LIST.map(project =>
    //     <ProjectRow project={project} />)}
    // </VStack>
  )
}