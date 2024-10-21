import React from 'react'
import { Box, Container, Heading, VStack, Input, Textarea, Button } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Box as="section" id="contact" py={{ base: 16, md: 24 }}>
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Contact Us
        </Heading>
        <Box maxW="md" mx="auto">
          <VStack as="form" spacing={4}>
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" width="full">
              Send Message
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}