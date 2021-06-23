import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import { Link, Code, Box } from '@chakra-ui/layout'
import Hero from '../components/Hero'
import Grid from '../components/Grid.tsx'
import Footer from  '../components/Footer.tsx'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

export default function Index() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title> Home | Victor Tran </title>
      </Head>
      <Stack
         as="main"
         spacing={8}
         justifyContent="center"
         alignItems="flex-start"
         m="0 auto 4rem auto"
         maxWidth="700px"
         px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Hero />
          <Grid />
        </Flex>
      </Stack>
      <Footer />
    </Container>
  )
}
