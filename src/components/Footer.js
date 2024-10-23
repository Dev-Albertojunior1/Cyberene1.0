import React from 'react'
import { Box, Container, Flex, Heading, Text, Stack, IconButton, Link } from '@chakra-ui/react'
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
            <Link href="https://twitter.com" isExternal>
              <IconButton 
                aria-label="Twitter" 
                icon={<FaTwitter />} 
                borderRadius="full" 
                bg="black"
                color="white"
                _hover={{ bg: "#1DA1F2", color: 'white' }} // Cor do Twitter
              />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <IconButton 
                aria-label="Facebook" 
                icon={<FaFacebook />} 
                borderRadius="full" 
                bg="black"
                color="white"
                _hover={{ bg: "#1877F2", color: 'white' }} // Cor do Facebook
              />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton 
                aria-label="Instagram" 
                icon={<FaInstagram />} 
                borderRadius="full" 
                bg="black"
                color="white"
                _hover={{ bg: "#E1306C", color: 'white' }} // Cor do Instagram
              />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton 
                aria-label="LinkedIn" 
                icon={<FaLinkedin />} 
                borderRadius="full" 
                bg="black"
                color="white"
                _hover={{ bg: "#0077B5", color: 'white' }} // Cor do LinkedIn
              />
            </Link>
          </Stack>
        </Flex>
        <Text mt={8} textAlign="center" fontSize="sm">
          &copy; {new Date().getFullYear()} IT Club. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}
