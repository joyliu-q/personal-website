import { Flex, Icon, IconButton, Link, Text, useColorMode } from '@chakra-ui/react'
import { THEME_COLORS, getExtendedThemeColors, LogoIcon } from '../utils'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default ({ currentPage }: { currentPage: string }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      width="100vw"
      bgColor={colorMode === 'dark' ?
        (currentPage === '/' ? getExtendedThemeColors(true).greyLight2 : getExtendedThemeColors(true).greyLight3)
        : (currentPage === '/' ? getExtendedThemeColors().greyLight1 : THEME_COLORS.lightAccent)}
      position="sticky" top="0" zIndex={2}
      py={4}
      px={4} textTransform="uppercase" fontSize="xl"
      height={["auto", "60px"]}
      alignContent="center"
      justifyContent={"space-between"}
    >
      <Flex justifyContent={["center", "left"]} alignItems="center" mr={4} width="100%">
        <Link href='/' display={["none", "block"]} width="50px" height="50px">
          <LogoIcon boxSize="50px" fill={colorMode === 'dark' ? getExtendedThemeColors().primary : THEME_COLORS.dark} />
        </Link>
        {links.map(link => (
          <Flex mx={4} alignItems="center" justifyContent={"center"}>
            <Link href={link.url} variant="ghost"><Text as="a" fontWeight={
              currentPage === link.url ? 'bold' : 'normal'
            } display="flex" flexDir="column" justifyContent="center"
            >{link.name}</Text></Link>
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
    </Flex >
  )
}

const links = [
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
]