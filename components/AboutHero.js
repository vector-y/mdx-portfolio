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
    Icon,
  } from '@chakra-ui/react';
  import NextLink from 'next/link'
  
  export default function SplitScreen() {
    let linkedURL = "https://www.linkedin.com/in/tran-victor/";
    let mailURL = "vt.victortran@gmail.com";
    let twitterURL = "https://twitter.com/vectori";
    return (
      <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={12} flex={1} justify={'center'}>
          <Stack spacing={2} w={'full'} maxW={'5xl'}>
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
                <Text color={"#4285F4"} as={'span'} >About Me</Text>{' '}
              </Text>
              <br />{' '}
            </Heading>
            
            <Text fontSize={{ base: '2xl', md: '2xl', lg: '2xl' }}>
                Hi there!  
            </Text>

            <p>
            I'm a recent new grad (c/o 2021) who majored in Computer Science at California State Long Beach (CSULB). I'm finishing up one last course this fall, looking to break into the user experience engineering space shortly after. 
            <br/>
            <br/>
            I plan on finishing up a UI / UX Design Specialization course offered by Cal Arts and finding my own space in pro bono design work before working full-time! In the past, I have worked as an engineering fellow at urspace labs, created internal tools at Northrop Grumman, and led the Society of Asian Scientists and Engineers as President at CSULB.
            <br/>
            <br/>
            When I'm not learning more about design, I usually go on a run, play a video game, and/or find new inspiration in art and music everywhere.
            </p>
            <br/>
            <Stack direction={{ base: 'column' }} spacing={10}>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={9}>
                <Heading as="h1" textAlign={"center"}>Photo of me</Heading>
                  <Image
                    alt={'Victor Profile Image'}
                    height= {'25em'}
                    objectFit={'cover'}
                    borderRadius={'25px'}
                    src={
                      '/khoai.jpg'
                    }
                  />
              </Stack>
              <Stack direction={{ base: 'column', md: 'row'}} spacing={5}>
                <Heading as="h1" textAlign={"center"}>Listening To:</Heading>
                  <p align="center"> 
                    <iframe src="https://open.spotify.com/embed/playlist/7xez5ktOS8kgr2PJwMBM8L" align= "center" position="center" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media" />
                  </p>
              </Stack>
            </Stack>
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
                    bg: "#4285F4",
                    zIndex: -1,
                    }}>
                    <Text color={"#4285F4"} as={'span'}>Contact</Text>{' '}
                </Text>
                <br />{' '}
                </Heading>
            </Stack>
            <UnorderedList
                fontSize={{ base: 'md', lg: 'lg' }}
            > 
                <ListItem>DM me on <a style={{color: "#4285F4", textDecoration: 'none'}} href={twitterURL}>Twitter</a> <br/></ListItem>
                <ListItem>Connect with me on <a style={{color: "#4285F4", textDecoration: 'none'}} href={linkedURL}>LinkedIn</a> <br/></ListItem>
                <ListItem>Reach out: <a style={{color: "#4285F4", textDecoration: 'none'}}>vt.victortran@gmail.com</a></ListItem>
            </UnorderedList>
          </Stack>
        
        </Flex>
      </Stack>
    );
  }