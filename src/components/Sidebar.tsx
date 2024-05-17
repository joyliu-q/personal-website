import { Flex, Icon, IconButton, Link, useColorMode } from '@chakra-ui/react'
import { getExtendedThemeColors } from '../utils'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

interface Tab {
  name: string
  url?: string
}

const TABS: Tab[] = [
  {
    name: 'About',
    url: '/',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Constellations',
    url: 'https://joyliu-q.github.io/constellations/',
  },
]

export default ({ }: {
  currentTab: string, setCurrentTab: (tab: string) => void
 }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex>
      <Flex flexDir={"column"} justifyContent={["center", "left"]} alignItems="center" mr={4} width="100%">
        <Link href='/' display={["none", "block"]} width="50px" height="50px">
          Yo
        </Link>
        {TABS.map(tab => (
          <Flex mx={4} alignItems="center" justifyContent={"center"}>
           {tab.name}
          </Flex>
        ))}
      </Flex>

      <Flex alignItems="center" justifyContent={"center"} position={["fixed", "inherit"]} bottom="24px" right="24px">
        <IconButton _focus={{
          boxShadow: `inset .2rem .2rem .5rem ${getExtendedThemeColors(colorMode === 'dark').greyLight1}, inset -.2rem -.2rem .5rem #fff`
        }} _active={{
          boxShadow: `inset .2rem .2rem .5rem ${getExtendedThemeColors(colorMode === 'dark').greyLight1}, inset -.2rem -.2rem .5rem #fff`
        }} aria-label='Toggle dark mode' className="card-inner" onClick={toggleColorMode} icon={<Icon as={colorMode === 'dark' ? BsFillMoonStarsFill : BsFillSunFill} />} />
      </Flex>
    </Flex>
  )
}