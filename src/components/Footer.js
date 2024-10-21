import React from 'react'
import { Box, Container, Flex, Heading, Text, Stack, IconButton } from '@chakra-ui/react'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py={8}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
          <Box mb={{ base: 4, md: 0 }}>
            <Heading as="h3" size="lg" mb={2}>
              IT Club
            </Heading>
            <Text fontSize="sm">Empowering the next generation of tech innovators</Text>
          </Box>
          <Stack direction="row" spacing={4}>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </Stack>
        </Flex>
        <Text mt={8} textAlign="center" fontSize="sm">
          &copy; {new Date().getFullYear()} IT Club. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}