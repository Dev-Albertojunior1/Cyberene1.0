import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, CardFooter, Button, Image } from '@chakra-ui/react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart Campus App',
      description: 'A mobile app to help students navigate the campus and access resources',
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: 'AI Study Buddy',
      description: 'An AI-powered chatbot to assist students with their studies',
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: 'Green Tech Initiative',
      description: 'Developing sustainable technology solutions for the campus',
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: 'Cybersecurity Awareness Game',
      description: 'An interactive game to teach students about online safety',
      image: '/placeholder.svg?height=200&width=400',
    },
  ];

  return (
    <Box as="section" id="projects" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <Card
              key={index}
              border="1px" // Define a borda
              borderColor="grey" // Cor da borda
              boxShadow="md" // Sombra padrão
              transition="transform 0.2s, box-shadow 0.2s" // Transição suave
              _hover={{
                transform: 'translateY(-5px)', // Move para cima
                boxShadow: '0 4px 20px rgba(255, 0, 0, 0.6)', // Sombra vermelha ao passar o mouse
              }}
            >
              <Image src={project.image} alt={project.title} height={200} objectFit="cover" />
              <CardBody>
                <Heading size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
              </CardBody>
              <CardFooter>
                <Button variant="outline" colorScheme="red">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
