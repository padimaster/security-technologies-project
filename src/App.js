import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import Hero from './components/Hero'
import Team from './components/Team'

export default function App() {
  return (
    <ChakraProvider>
        <body style={{margin:0}}>
          <Hero />
          <Team/>
        </body>
    </ChakraProvider>
  )
}