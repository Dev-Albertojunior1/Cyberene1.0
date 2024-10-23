import React, { useState, useEffect } from 'react';
import { Box, Container, Heading, Text, Button, Flex, Icon, Link, Image } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../images/logo.png";
import { motion } from 'framer-motion';

const texts = [
  "Empowering the next generation of tech innovators",
  "Inspiring creativity and innovation",
  "Building a better tomorrow with technology",
  "Join us in the journey of digital transformation"
];
               
// Criando um componente animado que utiliza o Chakra Text
const AnimatedText = motion(Text);

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {   
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Troca a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg="#ff0000" color="white" py={{ base: 12, md: 48 }} position="relative">
      <Container maxW="container.xl" textAlign="center">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mt={{ base: -10, md: 0 }}
        >
          <Box 
            flex="1" 
            display="flex"
            justifyContent="center"
            mb={{ base: 0, md: 0 }}
          >
            <Image 
              src={logo}
              alt="Imagem Descritiva"
              maxW={{ base: "80%", md: "400px" }}
              borderRadius="md"
            />
          </Box>

          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2" size="3xl" mb={4}>
              Welcome to Cyberene
            </Heading>
            <AnimatedText 
              fontSize={{ base: 'xl', md: '2xl' }} 
              mb={8}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.5 }} // Duração da animação
            >
              {texts[index]}
            </AnimatedText>
            <Button
              size="lg"
              bg="black"
              borderRadius="30px"
              color="white"
              _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
              _active={{ bg: "blue.700" }}
              py={{ base: 4, md: 6 }}
            >
              Join Us
            </Button>

            <Flex 
              justify={{ base: "center", md: "flex-start" }} 
              mt={6} 
              gap={4}
            >
              <Link href="https://www.facebook.com" isExternal>
                <Icon as={FaFacebook} w={8} h={8} color="#4267B2" _hover={{ transform: "scale(1.1)" }} />
              </Link>
              <Link href="https://www.twitter.com" isExternal>
                <Icon as={FaTwitter} w={8} h={8} color="#1DA1F2" _hover={{ transform: "scale(1.1)" }} />
              </Link>
              <Link href="https://www.instagram.com" isExternal>
                <Icon as={FaInstagram} w={8} h={8} color="pink" _hover={{ transform: "scale(1.1)" }} />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>

      {/* SVG com ondas na parte inferior */}
      <Box position="absolute" bottom={-5} left={0} right={0}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </Box>
    </Box>
  );
}
