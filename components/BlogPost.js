import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Box, Link, Image, Stack, useColorModeValue } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'

const BlogPost = ({ title, publishedAt, summary, slug }) => {
    const { colorMode } = useColorMode()
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    }


    return (
        <NextLink href={`portfolio/${slug}`} passhref>
            <Link w="100%" _hover={{ textDecoration: 'none' }}>
                <Box 
                maxW={'445px'}
                mt={5}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                _hover={{
                    transform: 'translateY(-1px)',
                    boxShadow: 'lg',
                    }}
                >
                    <Stack>
                        <Flex
                            width="100%"
                            align="flex-start"
                            justifyContent="space-between"
                            flexDirection={['column', 'row']}
                        >
                            <Stack mt={1} direction={'row'} spacing={4} align={'center'}>
                                <Flex flexDirection="column" align="flex-start" justifyContent="start" width="100%">
                                            <Text
                                        color={'green.500'}
                                        textTransform={'uppercase'}
                                        fontWeight={800}
                                        fontSize={'sm'}
                                        letterSpacing={1.1}>
                                        Portfolio
                                    </Text>
                                    <Heading
                                        color={useColorModeValue('gray.700', 'white')}
                                        fontSize={'2xl'}
                                        fontFamily={'body'}>
                                        {title}
                                    </Heading>
                                    
                                    <Text
                                    color="gray.500"
                                    textAlign='left'
                                    mb={[4, 0]}
                                    >
                                        {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
                                    </Text>
                                    <Text 
                                        color={secondaryTextColor[colorMode]}
                                    >
                                        {summary}
                                    </Text>
                                </Flex>
                            </Stack>
                        </Flex>
                    </Stack>
                </Box>
            </Link>
        </NextLink>
    )
}

export default BlogPost