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
  } from '@chakra-ui/react';
  import NextLink from 'next/link'
  
  export default function SplitScreen() {
    let ngURL = "https://www.northropgrumman.com/";
    let spaceURL = "https://labs.urspace.io/";
    return (
      <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'5xl'}>
            <Heading fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}>
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
                Victor is a <Text color={'red.400'} as={'span'}>UX Engineer</Text>{' '} based in <Text color={'red.400'} as={'span'}>Los Angeles</Text>{' '}
              </Text>
              <br />{' '}
            </Heading>
            
            <Text fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
                Currently a senior, using design to empower and educate people to live meaningful lives.  
            </Text>

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
        <Flex p={0} flex={1} align={'center'} justify={'center'}>
          <Image
            alt={'Login Image'}
            height= {'30em'}
            objectFit={'cover'}
            src={
              '/butterfly.jpg'
            }
          />
        </Flex>
      </Stack>
    );
  }