import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import globalStyles from '../styles/globalStyles'
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={[globalStyles]} />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
