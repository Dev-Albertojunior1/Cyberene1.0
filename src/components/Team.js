import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody, CardFooter, Avatar, Stack, IconButton } from '@chakra-ui/react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Team() {
  const teamMembers = [
    { name: 'Alex Johnson', role: 'President', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Samantha Lee', role: 'Vice President', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Michael Chen', role: 'Technical Lead', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Emily Davis', role: 'Event Coordinator', image: '/placeholder.svg?height=100&width=100' },
  ]

  return (
    <Box as="section" id="team" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Team
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardBody textAlign="center">
                <Avatar size="xl" name={member.name} src={member.image} mb={4} />
                <Heading size="md" mb={2}>
                  {member.name}
                </Heading>
                <Text color="gray.500">{member.role}</Text>
              </CardBody>
              <CardFooter justifyContent="center">
                <Stack direction="row" spacing={4}>
                  <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
                  <IconButton aria-label="Twitter" icon={<FaTwitter />} />
                  <IconButton aria-label="GitHub" icon={<FaGithub />} />
                </Stack>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}