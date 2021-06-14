import { ChakraProvider, ColorModeProvider, useColorMode, ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
import customTheme from '../styles/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    // <ThemeProvider theme= {theme}>
    // </ThemeProvider>
    <ChakraProvider resetCSS theme={ customTheme }>
      {/* <CSSReset /> */}
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  ); 
}

export default MyApp
