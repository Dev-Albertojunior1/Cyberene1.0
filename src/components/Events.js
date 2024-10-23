import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, CardFooter, Button, Tag } from '@chakra-ui/react';

export default function Events() {
  const events = [
    {
      title: 'Web Development Workshop',
      date: 'October 24, 2024',
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

  // Função para verificar se o evento é passado ou ativo
  const getStatus = (eventDate) => {
    const currentDate = new Date();
    const eventDateObj = new Date(eventDate);
    return eventDateObj > currentDate ? 'active' : 'passed';
  };

  return (
    <Box as="section" id="events" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Upcoming Events
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {events.map((event, index) => {
            const status = getStatus(event.date);
            const statusColor = status === 'active' ? 'green.500' : 'red.500';

            return (
              <Card
                key={index}
                bg="white"
                border="2px"
                borderColor="gray.200"
                boxShadow="md"
                borderRadius="lg"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 4px 20px rgba(255, 0, 0, 0.6)',
                }}
              >
                <CardBody>
                  <Heading size="md" mb={2} color="red.600">
                    {event.title}
                  </Heading>
                  <Text color="gray.600" fontWeight="bold" mb={2}>
                    {event.date}
                  </Text>
                  <Text mb={4}>{event.description}</Text>
                  {/* Tag de status com cores diferentes */}
                  <Tag colorScheme={status === 'active' ? 'green' : 'red'} borderRadius="full">
                    {status === 'active' ? 'Upcoming' : 'Passed'}
                  </Tag>
                </CardBody>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    colorScheme="red" 
                    bg="yellow.400" 
                    color="black" 
                    borderColor="gray.200" 
                    borderRadius="20px" 
                    _hover={{ bg: 'yellow.300' }}
                  >
                    Register
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
