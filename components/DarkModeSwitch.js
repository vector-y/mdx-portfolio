import { useColorMode, Switch, IconButton, Flex, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',  
        dark: 'white'
    }

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300',
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `
    
    const[display, changeDisplay] = useState('none')

    return (
        <Flex>
            <Flex
            pos="fixed"
            top="1rem"
            right="1rem"
            align="center" 
            >
                <Flex
                display={['none','none','flex','flex']}>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            About
                        </Button>
                    </NextLink>
                    <NextLink href="/portfolio" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            Portfolio
                        </Button>
                    </NextLink>
                    <NextLink href="https://drive.google.com/file/d/1b1wKUZjnRn0W5TBIYi6vpXiYWO8COyoI/view?usp=sharing" passHref>
                        <Button target="_blank" rel="noopener noreferrer" as="a" variant="ghost" p={[1, 2, 4]}>
                            Resume
                        </Button>
                    </NextLink>
                </Flex>
                <IconButton
                    aria-label='Open Menu'
                    size="lg"
                    mr={2}
                    icon={<HamburgerIcon />}
                    display={['flex','flex','none','none']}
                    onClick={() => changeDisplay('flex')}
                    color={iconColor[colorMode]}
                    bgColor="whiteAlpha.100"
                />
                <IconButton
                    aria-label="Toggle dark mode"
                    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    onClick={toggleColorMode}
                    color={iconColor[colorMode]}
                    size="lg"
                    mr={2}
                    bgColor="whiteAlpha.100"
                    />
            </Flex>

            <Flex
                w="100vw"
                bgColor="gray.500"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                display={display}
            >
                <Flex justify="flex-end">
                    <IconButton
                    mt={2}
                    mr={2}
                    aria-label="Close Menu"
                    size="lg"
                    icon={
                        <CloseIcon />
                    }
                    onClick={() => changeDisplay('none')}
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    align="center"
                >
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            About
                        </Button>
                    </NextLink>
                    <NextLink href="/portfolio" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            Portfolio
                        </Button>
                    </NextLink>
                    <NextLink href="https://drive.google.com/file/d/1b1wKUZjnRn0W5TBIYi6vpXiYWO8COyoI/view?usp=sharing" passHref>
                        <Button target="_blank" rel="noopener noreferrer" as="a" variant="ghost" p={[1, 2, 4]}>
                            Resume
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>

        </Flex>
    )
}

export default DarkModeSwitch