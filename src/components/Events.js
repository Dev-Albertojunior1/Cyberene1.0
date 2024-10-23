import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, CardFooter, Button } from '@chakra-ui/react';

export default function Events() {
  const events = [
    {
      title: 'Web Development Workshop',
      date: 'May 15, 2024',
      description: 'Learn the basics of HTML, CSS, and JavaScript',
    },
    {
      title: 'Hackathon 2024',
      date: 'June 1-2, 2024',
      description: '48-hour coding challenge with amazing prizes',
    },
    {
      title: 'AI and Machine Learning Talk',
      date: 'June 20, 2024',
      description: 'Guest speaker from Google discussing the latest in AI',
    },
  ];

  return (
    <Box as="section" id="events" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Upcoming Events
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {events.map((event, index) => (
            <Card
              key={index}
              bg={""}
              border="2px" // Define a borda
              borderColor="grey" // Cor da borda
              boxShadow="md" // Sombra padrão
              transition="transform 0.2s, box-shadow 0.2s" // Transição suave
              _hover={{
                transform: 'translateY(-5px)', // Move para cima
                boxShadow: '0 4px 20px rgba(255, 0, 0, 0.6)', // Sombra vermelha ao passar o mouse
              }}
            >
              <CardBody >
                <Heading size="md" mb={2}>
                  {event.title}
                </Heading>
                <Text color="red" mb={2}>
                  {event.date}
                </Text>
                <Text>{event.description}</Text>
              </CardBody>
              <CardFooter>
                <Button variant="outline" colorScheme="red" bg={"yellow"} color={"black"} borderColor="white" borderRadius={"20px"} >
                  Register
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
