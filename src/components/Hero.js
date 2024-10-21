import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Button, Text as ChakraText, Flex, Icon } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa'; // Importando o ícone de usuários

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 110); // Ajuste a velocidade do contador aqui

    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg="#ff0000" color="white" py={{ base: 24, md: 48 }} position="relative">
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" size="3xl" mb={4}>
          Welcome to Cyberene
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }} mb={8}>
          Empowering the next generation of tech innovators
        </Text>
        <Button
          size="lg"
          bg="black"
          borderRadius="30px"
          color="white"
          _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
          _active={{ bg: "blue.700" }}
          py={{ base: 4, md: 6 }}
        >
          Join Us
        </Button>

        {/* Contador de Membros */}
        <Flex 
          align="center" 
          justify="center" 
          mt={6} 
          bg="rgba(255, 255, 255, 0.1)" // Fundo semi-transparente
          borderRadius="15px" 
          p={2} // Reduzindo o padding
          boxShadow="md" // Sombra mais leve
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)" }} // Efeito de hover
          maxW={{ base: '80%', md: '300px' }} // Largura máxima para telas pequenas
          mx="auto" // Centraliza horizontalmente
        >
          <Icon as={FaUsers} w={5} h={5} color="white" mr={2} /> {/* Ícone de usuários */}
          <ChakraText fontSize={{ base: 'lg', md: 'xl' }} color="white">
            Members: {count}
          </ChakraText>
        </Flex>
      </Container>

      {/* SVG com ondas na parte inferior */}
      <Box position="absolute" bottom={-5} left={0} right={0}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </Box>
    </Box>
  );
}
