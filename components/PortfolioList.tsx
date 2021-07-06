import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Flex,
} from '@chakra-ui/react';

import NextLink from 'next/link'

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="red" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
    let coingoURL = "https://www.figma.com/file/lcFm0PxRnspf4hTAZ7Icbm/Demo-Presentation?node-id=0%3A1";
    return (
        <Container maxW={'7xl'} p="12">
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text 
                mt={5}
                mb={5}
                textAlign={"center"}
                >
                    Work Experience
                </Text>
            </Heading>
        <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between">
            <Box
            display="flex"
            flex="2"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <NextLink href="/portfolio" passHref>
                            <Image
                            alt={'ikigai'}
                            borderRadius="lg"
                            objectFit={'contain'}
                            src={
                                '/ikigai.png'
                            }
                            />
                    </NextLink>
                </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
                />
            </Box>
            </Box>
            <Box
            display="flex"
            flex="3"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <Heading marginTop="1" marginBottom="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <NextLink href="/portfolio" passHref>
                        ikigai
                    </NextLink>
                </Link>
            </Heading>
            <BlogTags tags={['Engineering', 'Website', 'Design']} />
            <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg">
                ikigai is a prototyped web application which combines e-commerce and sustainability (since thrifting helps combat fast fashion). The idea is for us to look at your clothing purchase history to make selling and sharing your fashion a more social and seamless experience.
            </Text>
            </Box>
        </Box>



        <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between">
            <Box
            display="flex"
            flex="2"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <NextLink href={coingoURL} passHref>
                        <Image
                        alt={'ikigai'}
                        borderRadius="lg"
                        objectFit={'contain'}
                        src={
                            '/coingo.png'
                        }
                        />
                    </NextLink>
                </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
                />
            </Box>
            </Box>
            <Box
            display="flex"
            flex="3"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <Heading marginTop="1" marginBottom="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <NextLink href={coingoURL} passHref>
                        coingo
                    </NextLink>
                </Link>
            </Heading>
            <BlogTags tags={['Engineering', 'Product', 'Fellowship']} />
            <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg">
                Being a treasurer doesn’t need to be hard. Say goodbye to spreadsheets and visualize your organization’s finances all in one place.
            </Text>
            </Box>
        </Box>


        <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between">
            <Box
            display="flex"
            flex="2"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <NextLink href="/portfolio" passHref>
                        <Image
                        alt={'northrop grumman'}
                        borderRadius="lg"
                        objectFit={'contain'}
                        src={
                            '/northrop.png'
                        }
                        />
                    </NextLink>
                </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
                />
            </Box>
            </Box>
            <Box
            display="flex"
            flex="3"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <Heading marginTop="1" marginBottom="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <NextLink href="/portfolio" passHref>
                        Northrop Grumman
                    </NextLink>
                </Link>
            </Heading>
            <BlogTags tags={['Engineering', 'Python', 'Internship']} />
            <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg">
                Joined the electric vehicle team for the James Webb Telescope. Translated telemetry satellite data to readable engineering units through an internal tool using a python script. 
            </Text>
            </Box>
        </Box>


    </Container>
  );
};

export default ArticleList;