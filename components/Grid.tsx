import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { FcCommandLine, FcDonate, FcLike } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.500'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        <Text 
          textAlign={"center"}
          mt={5}
          mb={5}
        >
            Currently <Text color={"#4285F4"} as={'span'}>Learning</Text>{' '}
        </Text>
      </Heading>
      <SimpleGrid alignItems={"center"} columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCommandLine} w={10} h={10} />}
          title={'node.js'}
          text={
            'Learning more about next.js, planet scale, and prisma! Always open to chat more about web development & product design :)'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'How to Give Back'}
          text={
            'Looking to donate time to learn how to contribute back to my community through design and technology!'
          }
        />
        <Feature
          icon={<Icon as={FcLike} w={10} h={10} />}
          title={'UI/UX Design'}
          text={
            'Learning UI/UX Design Specialization by Cal Arts - Also taking DesignLab UX Academy Foundations under mentorship from a Lead UX Designer @ Rite Aid'
          }
        />
      </SimpleGrid>
    </Box>
  );
}