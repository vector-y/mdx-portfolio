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
        <NextLink href={`portfolio/${slug}`} passHref>
            <Link w="100%" _hover={{ textDecoration: 'none' }}>
                <Box 
                mb={10} 
                display="block" 
                width="100%" 
                maxW={'500px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                // boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
                mt={8}
                rounded={'md'}
                _hover={{
                transform: 'translateY(-1px)',
                boxShadow: 'lg',
                }}
                >
                    {/* <Image
                        h={'120px'}
                        w={'full'}
                        src={
                        'https://pbs.twimg.com/media/E1Dic6qXoAAG-jy?format=jpg&name=large'
                        }
                        objectFit={'cover'}
                    /> */}
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection={['column', 'row']}
                    >
                        <Stack spacing={0} align={'center'} mb={3}>
                            <Flex flexDirection="column" align="flex-start" justifyContent="start" width="100%">
                                <Heading size="md" as="h3" mt={3} mb={1} ml={2} fontWeight="medium">
                                    {title}
                                </Heading>
                                <Text
                                color="gray.500"
                                ml={2}
                                textAlign='left'
                                mb={[4, 0]}
                                >
                                    {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
                                </Text>
                                <Text 
                                    color={secondaryTextColor[colorMode]}
                                    ml={2}
                                >
                                    {summary}
                                </Text>
                            </Flex>
                        </Stack>
                    </Flex>
                </Box>
            </Link>
        </NextLink>
    )
}

export default BlogPost