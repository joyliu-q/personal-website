import { Flex, Grid, Heading, IconButton, Box } from '@chakra-ui/react'
import { PROJECT_LIST } from '../../pages/Projects/data'
import { ProjectRow } from '../../pages/Projects/ProjectCard'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'

export const ProjectPreview = ({isDark = false}: {isDark?: boolean}) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300 + 16
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Flex flexDir="column" width="100%" position="relative">
      <Flex py={2} alignContent="center" flexDir="column">
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Flex as="a" href="/projects" className="card btn" p={4} my={4} flex={1} textAlign="center" justifyContent={"center"}>
            <Heading fontSize={["md", "2xl"]}>
              Recent Projects
            </Heading>
          </Flex>
          <Flex ml={4}>
            <IconButton
              size={"sm"}
              aria-label="Scroll left"
              icon={<ChevronLeftIcon />}
              onClick={() => scroll('left')}
              className="card"
              isDisabled={!showLeftButton}
              opacity={showLeftButton ? 1 : 0.5}
              mr={2}
            />
            <IconButton
              size={"sm"}
              aria-label="Scroll right"
              icon={<ChevronRightIcon />}
              onClick={() => scroll('right')}
              className="card"
              isDisabled={!showRightButton}
              opacity={showRightButton ? 1 : 0.5}
            />
          </Flex>
        </Flex>
      </Flex>
      
      <Box
        py={4}
        ref={scrollRef}
        overflowX="auto"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none'
        }}
        onScroll={handleScroll}
      >
        <Grid
          templateColumns={`repeat(${PROJECT_LIST.length}, 300px)`}
          gap={"16px"}
          px={4}
          width="max-content"
        >
          {PROJECT_LIST.map(project => (
            <ProjectRow 
              key={project.title}
              project={project}
              isDark={isDark}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  )
}