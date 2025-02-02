import { Flex, Icon, IconButton, Link, Text, useColorMode } from '@chakra-ui/react'
import { THEME_COLORS, getExtendedThemeColors, LogoIcon } from '../utils'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

interface NavBarProps {
  currentPage: string;
}

export const NavBar = ({ currentPage }: NavBarProps): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCollapsed(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = colorMode === 'dark'
    ? currentPage === '/' ? getExtendedThemeColors(true).greyLight2 : getExtendedThemeColors(true).greyLight3
    : currentPage === '/' ? getExtendedThemeColors().greyLight1 : THEME_COLORS.lightAccent;

  return (
    <>
      <Flex
        as="nav"
        width={isCollapsed && !isHovered ? "auto" : "100vw"}
        bg={isCollapsed && !isHovered ? "transparent" : bgColor}
        position="fixed"
        top="0"
        left="0"
        zIndex={2}
        py={"1rem"}
        px={"1rem"}
        textTransform="uppercase"
        fontSize="xl"
        height={"60px"}
        alignContent="center"
        justifyContent={"space-between"}
        transition="all 0.4s ease-in-out"
        transform={isCollapsed && !isHovered ? "translateX(0)" : "translateX(0)"}
        className={isCollapsed && !isHovered ? "navbar-collapsed" : "navbar-expanded"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Flex 
          justifyContent={["center", "space-between"]} alignItems="center"
          width={isCollapsed && !isHovered ? "auto" : "100%"}
        >
          <Flex alignItems="center" justifyContent={"left"}>
            <Link href='/' display="block" width={"50px"} height={"50px"}>
              <LogoIcon 
                boxSize={"50px"} 
                fill={colorMode === 'dark' ? getExtendedThemeColors().primary : THEME_COLORS.dark} 
              />
            </Link>
            {(!isCollapsed || isHovered) && links.map(link => (
              <Flex mx={4} alignItems="center" justifyContent={"center"} key={link.url}>
                <Link href={link.url} variant="ghost">
                  <Text fontSize={["xs", "md"]} as="a" fontWeight={currentPage === link.url ? 'bold' : 'normal'} display="flex" flexDir="column" justifyContent="center">
                    {link.name}
                  </Text>
                </Link>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex 
        alignItems="center" 
        justifyContent={"center"} 
        position="fixed"
        top={["inherit", "4px"]}
        bottom={["24px", "inherit"]}
        right="24px"
        zIndex={999}
      >
        <IconButton 
          backgroundColor={getExtendedThemeColors(colorMode === 'dark').greyLight1}
          _focus={{
            boxShadow: `inset .2rem .2rem .5rem ${getExtendedThemeColors(colorMode === 'dark').greyLight1}, inset -.2rem -.2rem .5rem #fff`
          }} 
          _active={{
            boxShadow: `inset .2rem .2rem .5rem ${getExtendedThemeColors(colorMode === 'dark').greyLight1}, inset -.2rem -.2rem .5rem #fff`
          }} 
          aria-label='Toggle dark mode' 
          className="card-inner" 
          onClick={toggleColorMode} 
          icon={<Icon as={colorMode === 'dark' ? BsFillMoonStarsFill : BsFillSunFill} />} 
        />
      </Flex>
    </>
  )
}

export default NavBar;

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