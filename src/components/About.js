
import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Icon,Flex, Text as ChakraText } from '@chakra-ui/react'
import { FaUsers } from 'react-icons/fa';

export default function About() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 110); // Ajuste a velocidade do contador aqui

    return () => clearInterval(interval);
  }, []);


  return (
    <Box as="section" id="about" py={{ base: 16, md: 24 }}>
      <Container maxW="container.xl">
        {/* Contador de Membros */}
        <Flex 
          align="center" 
          justify="center" 
          mt={-12} 
          fontWeight={"bold"}
          mb={10}
          bg="#fac823" // Fundo semi-transparente
          borderRadius="15px" 
          p={2} // Reduzindo o padding
          boxShadow="md" // Sombra mais leve
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)" }} // Efeito de hover
          maxW={{ base: '80%', md: '300px' }} // Largura máxima para telas pequenas
          mx="auto" // Centraliza horizontalmente
        >
          <Icon as={FaUsers} w={5} h={5} color="black" mr={2} /> {/* Ícone de usuários */}
          <ChakraText fontSize={{ base: 'lg', md: 'xl' }} color="black">
            Members: {count}
          </ChakraText>
        </Flex>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          About Us
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box>
            <Text mb={4}>
              IT Club is a community of passionate tech enthusiasts dedicated to learning, sharing, and creating
              innovative solutions. We provide a platform for students to explore various aspects of information
              technology, from programming to cybersecurity.
            </Text>
            <Text>
              Our mission is to bridge the gap between academic knowledge and real-world applications, fostering a
              collaborative environment where members can grow their skills and network with industry professionals.
            </Text>
          </Box>
          <SimpleGrid columns={2} spacing={4}>
            {[
              { title: 'Coding', icon: '💻' },
              { title: 'Networking', icon: '🌐' },
              { title: 'Events', icon: '📅' },
              { title: 'Projects', icon: '🚀' },
            ].map((item) => (
              <Card key={item.title}>
                <CardBody>
                  <Text fontSize="3xl" mb={2}>
                    {item.icon}
                  </Text>
                  <Heading size="md" mb={2}>
                    {item.title}
                  </Heading>
                  <Text fontSize="sm">Learn and grow with our {item.title.toLowerCase()} initiatives.</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  )
}