import { useColorMode, Input, InputGroup, InputLeftElement, Flex, Heading } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import NavBar from '../../components/NavBar'
import ProjectList from './ProjectList';
import { useState } from 'react';
import { getExtendedThemeColors } from '../../utils';

export const Projects = () => {
  const { colorMode } = useColorMode()
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: colorMode === 'dark' ? '#333333' : '#f2f0f9'
    }}>
      <NavBar currentPage={"/projects"} />
      <div className="container" style={{
        flexDirection: 'column',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: 'calc(100vh - 60px)',
        padding: '0 0 2rem 0'
      }}>
        <Flex minW="60vw" w="100%" alignContent="center" justifyContent="center" py={4}>
          <Flex p={[4, 6]} borderRadius={4} className="card" width="100%">
            <Flex className="card-inner" p={4} width="100%">
              <Heading as='h1' fontSize="4xl" width="100%">
                Projects
              </Heading>
          <InputGroup maxWidth="300px" borderRadius="1rem">
            <InputLeftElement pointerEvents='none' h="100%">
              <SearchIcon color={getExtendedThemeColors(colorMode === 'dark').greyDark} />
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
                  boxShadow: colorMode === 'dark' 
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
              backgroundColor={colorMode === 'dark' ? getExtendedThemeColors(true).greyLight1 : getExtendedThemeColors().greyLight1}
              color={getExtendedThemeColors(colorMode === 'dark').greyDark}
            />
            </InputGroup>

            </Flex>
          </Flex>
        </Flex>

        <ProjectList isDark={colorMode === 'dark'} searchQuery={searchQuery} />
      </div>
    </div>
  );
};
