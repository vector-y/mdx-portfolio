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
              Victor is a <Text color={'red.400'} as={'span'}>UX Engineer</Text>{' '} based in <br /> <Text color={'red.400'} as={'span'}>Los Angeles</Text>{' '}
            </Text>
            <br />{' '}
          </Heading>
          <UnorderedList
            fontSize={{ base: 'md', lg: 'lg' }}
          >
            <ListItem>Studying Computer Science @ Long Beach State</ListItem>
            <ListItem>Previously @ <a style={{color: "#F56565", textDecoration: 'none'}} href={ngURL}>Northrop Grumman</a> <br/></ListItem>
            <ListItem>Previously @ <a style={{color: "#F56565", textDecoration: 'none'}} href={spaceURL}>urspace Labs</a> <br/></ListItem>
          </UnorderedList>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
            <NextLink href="/about" passHref>
              <Button
                rounded={'full'}
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}>
                About Victor
              </Button>
            </NextLink>
            <NextLink href="/portfolio" passHref>
              <Button rounded={'full'}>View Portfolio</Button>
            </NextLink>
          </Stack>
        </Stack>
      </Flex>
      <Flex p={1} flex={1} align={'center'} justify={'center'}>
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