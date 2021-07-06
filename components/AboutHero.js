import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    ListItem,
    UnorderedList, 
    Box,
  } from '@chakra-ui/react';
  import NextLink from 'next/link'
  
  export default function SplitScreen() {
    let ngURL = "https://www.northropgrumman.com/";
    let spaceURL = "https://labs.urspace.io/";
    return (
      <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'5xl'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{ 
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}>
                <Text color={'red.400'} as={'span'} >About Me</Text>{' '}
              </Text>
              <br />{' '}
            </Heading>
            
            <Text fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
                Currently a senior, implementing designs to improve quality of life for all people to live easier lives.  
            </Text>

            <p>
              I grew up in small-town Iowa and went to school at Iowa State, graduating with a degree in Computer Engineering. I spend my free time playing music, creating videos, and enjoying time with friends and family in Des Moines, IA.
            </p>

            <Stack direction={{ base: 'column', md: 'row' }} spacing={10}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                    }}>
                    <Text color={'red.400'} as={'span'}>Contact</Text>{' '}
                </Text>
                <br />{' '}
                </Heading>
            </Stack>
            <UnorderedList
                fontSize={{ base: 'md', lg: 'lg' }}
            > 
                <ListItem>vt.victortran@gmail.com</ListItem>
                <ListItem>Previously @ <a style={{color: "#F56565", textDecoration: 'none'}} href={ngURL}>Northrop Grumman</a> <br/></ListItem>
                <ListItem>Previously @ <a style={{color: "#F56565", textDecoration: 'none'}} href={spaceURL}>urspace Labs</a> <br/></ListItem>
            </UnorderedList>
          </Stack>
        </Flex>

        
        <Flex p={0} flex={1} align={'right'} justify={'right'}>
          <Stack direction={{ base: 'column'}} spacing={10}>
            <Image
              alt={'Login Image'}
              height= {'30em'}
              objectFit={'cover'}
              src={
                '/butterfly.jpg'
              }
            />
            <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
              <Heading as="h1">What I'm Listening To</Heading>
              <iframe src="https://open.spotify.com/embed/playlist/7xez5ktOS8kgr2PJwMBM8L" position="center" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" />
            </Box>
          </Stack>
        </Flex>
      </Stack>
    );
  }