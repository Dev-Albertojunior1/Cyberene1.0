import React from 'react';
import { Box, Container, Flex, Heading, Text, Stack, IconButton, Link } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Adicionado FaEnvelope para o ícone de email

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py={8}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
          <Box mb={{ base: 4, md: 0 }}>
            <Heading as="h3" size="lg" mb={2}>
              Cyberene
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
            <Link href="https://www.instagram.com/_cyberene?igsh=aWNub3RwM2c5ZzBp" isExternal>
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
            {/* Botão de email */}
            <Link href="mailto:cyberene@anu.ac.ke"> {/* Substitua pelo seu endereço de email */}
              <IconButton 
                aria-label="Email" 
                icon={<FaEnvelope />} 
                borderRadius="full" 
                bg="black"
                color="white"
                _hover={{ bg: "#FF4500", color: 'white' }} // Cor do Email
              />
            </Link>
          </Stack>
        </Flex>
        <Text mt={8} textAlign="center" fontSize="sm">
          &copy; {new Date().getFullYear()} Alberto Junior. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
