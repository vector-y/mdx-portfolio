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


export default function SplitScreen() {
  let ngURL = "https://www.northropgrumman.com/";
  let spaceURL = "https://labs.urspace.io/";
  return (
    <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
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
              Victor is a <Text color={'red.400'} as={'span'}>UX Engineer</Text>{' '} based in <Text color={'red.400'} as={'span'}>Los Angeles</Text>{' '}
            </Text>
            <br />{' '}
          </Heading>
          <UnorderedList
            fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}
          >
            <ListItem>Studying Computer Science @ Long Beach State</ListItem>
            <ListItem>Previously @ <a style={{color: "#F56565", textDecoration: 'none'}} href={ngURL}>Northrop Grumman</a> <br/></ListItem>
            <ListItem>Previously @ <a style={{color: "#F56565", textDecoration: 'none'}} href={spaceURL}>urspace Labs</a> <br/></ListItem>
          </UnorderedList>
          {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
           Victor is a UX Engineer based in LA. He enjoys Arizona Tea, running, and watching k-dramas.
          </Text> */}
          <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
            <Button
              rounded={'full'}
              bg={'red.400'}
              color={'white'}
              _hover={{
                bg: 'red.500',
              }}>
              About Victor
            </Button>
            <Button rounded={'full'}>View Portfoilo</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Image
          alt={'Login Image'}
          height= {'25em'}
          objectFit={'cover'}
          src={
            '/butterfly.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}