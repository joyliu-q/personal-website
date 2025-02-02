import { useColorMode, Input, InputGroup, InputLeftElement, Flex, Heading, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import NavBar from '../../components/NavBar'
import ProjectList from './ProjectList';
import { useState } from 'react';
import { getExtendedThemeColors } from '../../utils';
import { ProjectLabel } from './data';
import { ProjectLabelTag } from '../../components/ProjectLabel';

export const Projects = () => {
  const { colorMode } = useColorMode()
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLabels, setSelectedLabels] = useState<ProjectLabel[]>([]);

  const toggleLabel = (label: ProjectLabel) => {
    if (selectedLabels.length === 0) {
      setSelectedLabels([label])
    } else if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter(l => l !== label))
    } else {
      setSelectedLabels([...selectedLabels, label])
    }
  }

  const isDark = colorMode === 'dark'

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: isDark ? '#333333' : '#f2f0f9',
      padding: '3rem 0'
    }}>
      <NavBar currentPage={"/projects"} />
      <div className="container" style={{
        justifyContent: "start",
        alignItems: "center",
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: 'calc(100vh - 60px)',
        padding: '0 0 2rem 0'
      }}>
        <Flex minW="60vw" w="100%" alignContent="center" justifyContent="center" py={4}>
          <Flex p={[4, 6]} borderRadius={4} className="card" width="100%" flexDir="column">
            <Flex className="card-inner" p={4} width="100%" flexDir="column">
              <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <Heading as='h1' fontSize="4xl">
                  Projects
                </Heading>
                <InputGroup maxWidth="300px" borderRadius="1rem">
                  <InputLeftElement pointerEvents='none' h="100%">
                    <SearchIcon color={getExtendedThemeColors(isDark).greyDark} />
                  </InputLeftElement>
                  <Input
                    placeholder='Search projects...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    border="none"
                    height="3rem"
                    className="card-inner"
                    sx={{
                      '&:focus': {
                        boxShadow: isDark 
                          ? 'inset 0.4rem 0.4rem 0.8rem #2D2D2D, inset -0.4rem -0.4rem 0.8rem #3D3D3D !important'
                          : 'inset 0.4rem 0.4rem 0.8rem #E3E1EE, inset -0.4rem -0.4rem 0.8rem #FFFFFF !important',
                        outline: 'none',
                        border: 'none'
                      }
                    }}
                    _focus={{
                      outline: 'none',
                      border: 'none',
                      boxShadow: 'none'
                    }}
                    backgroundColor={isDark ? getExtendedThemeColors(true).greyLight1 : getExtendedThemeColors().greyLight1}
                    color={getExtendedThemeColors(isDark).greyDark}
                  />
                </InputGroup>
              </Flex>
              
              <Flex flexWrap="wrap" mt={2} alignItems="center">
                <Text mr={2} color={getExtendedThemeColors(isDark).greyDark}>Filter by:</Text>
                {Object.values(ProjectLabel).map(label => (
                  <ProjectLabelTag
                    key={label}
                    label={label}
                    isDark={isDark}
                    onClick={() => toggleLabel(label)}
                    isSelected={selectedLabels.includes(label)}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <ProjectList 
          isDark={isDark} 
          searchQuery={searchQuery} 
          selectedLabels={selectedLabels}
        />
      </div>
    </div>
  );
};
