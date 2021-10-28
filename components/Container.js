import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box,
    Image,
    Avatar,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Link from 'next/link'
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/DarkModeSwitch'

const Container = ({ children }) => {
    const { colorMode } = useColorMode()

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

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >

                <Box>
                    <NextLink href="/" passhref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/about" passhref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            About
                        </Button>
                    </NextLink>
                    <NextLink href="/portfolio" passhref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            Portfolio
                        </Button>
                    </NextLink>
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1b1wKUZjnRn0W5TBIYi6vpXiYWO8COyoI/view?usp=sharing" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]}>
                            Resume
                        </Button>
                    </a>
                </Box>
                <DarkModeSwitch />
            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container