import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Card, CardBody } from '@chakra-ui/react'

export default function About() {
  return (
    <Box as="section" id="about" py={{ base: 16, md: 24 }}>
      <Container maxW="container.xl">
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