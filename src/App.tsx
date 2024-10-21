import React from 'react';
import logo from './logo.svg';
import './App.css';
import ITClubWebsite from './components/ITClubWebsite';

import Hero from './components/Hero';
import { AbsoluteCenter } from '@chakra-ui/react';
import Events from './components/Events';
import { theme } from '../src/theme'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Projects from './components/Projects';
import Team from './components/Team';
import { Contact } from 'lucide-react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <Header />
        <Hero />
        <About />
        <Events />
        <Projects />
        <Team />
        <Contact />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
