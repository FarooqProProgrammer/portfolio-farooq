import { ChakraProvider, Flex } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import Portfolio from './pages/Portfolio'
import Education from './pages/Education'

export default function App() {
  return (
    <ChakraProvider>
      <Flex height={'100vh'} width={'100%'}>
        <Sidebar />
       
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/portfolio' Component={Portfolio} />
            <Route path='/education' Component={Education} />
          </Routes>
      
      </Flex>
    </ChakraProvider>
  )
}
