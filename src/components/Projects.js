import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, CardFooter, Button, Image } from '@chakra-ui/react';
import img1 from "../images/img1.jpeg"; 
import img2 from "../images/image2.jpeg";
import img3 from "../images/image3.jpeg";
import img4 from "../images/image4.jpeg";

export default function Projects() {
  const projects = [
    {
      title: 'Smart Campus App',
      description: 'A mobile app to help students navigate the campus and access resources',
      image: img1,
      link: 'https://www.youtube.com/watch?v=example1', // Link externo para o YouTube
    },
    {
      title: 'AI Study Buddy',
      description: 'An AI-powered chatbot to assist students with their studies',
      image: img2,
      link: 'https://www.youtube.com/watch?v=example2', // Link externo para o YouTube
    },
    {
      title: 'Green Tech Initiative',
      description: 'Developing sustainable technology solutions for the campus',
      image: img3,
      link: 'https://www.youtube.com/watch?v=example3', // Link externo para o YouTube
    },
    {
      title: 'Cybersecurity Awareness Game',
      description: 'An interactive game to teach students about online safety',
      image: img4,
      link: 'https://www.youtube.com/watch?v=example4', // Link externo para o YouTube
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
              border="1px"
              borderColor="gray.300"
              borderRadius="lg"
              boxShadow="lg"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                height={200}
                width="100%"
                objectFit="cover"
              />
              <CardBody>
                <Heading size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
              </CardBody>
              <CardFooter>
                <Button 
                  as="a"
                  href={project.link}
                  target="_blank" // Abre em nova aba
                  rel="noopener noreferrer" // Segurança adicional
                  variant="solid" 
                  colorScheme="red"
                  bg="red.500"
                  color="white"
                  borderRadius="30px"
                  _hover={{ bg: 'red.600' }}
                >
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
