import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, CardFooter, Button, Tag } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionCard = motion(Card); // Usando motion no Card

// Componente separado para o Card do Evento
function EventCard({ event, index }) {
  const status = new Date(event.date) > new Date() ? 'active' : 'passed';

  // Hook do Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <MotionCard
      ref={ref}
      bg="white"
      border="2px"
      borderColor="gray.200"
      boxShadow="md"
      borderRadius="lg"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.5 }}
    >
      <CardBody>
        <Heading size="md" mb={2} color="red.600">
          {event.title}
        </Heading>
        <Text color="gray.600" fontWeight="bold" mb={2}>
          {event.date}
        </Text>
        <Text mb={4}>{event.description}</Text>
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
    </MotionCard>
  );
}

export default function Events() {
  const events = [
    {
      title: 'Web Development Workshop',
      date: 'October 25, 2024',
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
            <EventCard key={index} event={event} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
