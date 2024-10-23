import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Image,
  Divider
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from "../images/Anu-logo.webp";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = (event, targetId) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    const targetElement = document.getElementById(targetId);
    if (targetElement) {    
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClose(); // Fecha o menu do drawer após clicar
    }
  };

  return (
    <>
      <Box as="header" bg="#fac823" boxShadow="sm" position="sticky" top={0} zIndex={10}>
        <Container maxW="container.xl">
          <Flex py={4} justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <Image 
                src={logo} 
                alt="Logo" 
                height={{ base: '30px', md: '50px' }} // Reduz o tamanho da logo no mobile
                mr={2} // Espaçamento à direita da logo
              />
              <Divider orientation="vertical" height="40px" mx={2} borderColor="black" />
              <Heading as="h1" size={{ base: 'md', md: 'lg' }} color="black">
                Cyberene
              </Heading>
            </Flex>
            
            <Flex display={{ base: 'none', md: 'flex' }}>
              {['About', 'Events', 'Projects', 'Team', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  mx={3} 
                  fontWeight="medium" 
                  color="black"
                  onClick={(e) => handleScroll(e, item.toLowerCase())} // Adiciona o manipulador de rolagem
                  _hover={{ textDecoration: 'underline', color: 'blue.300' }} // Efeito de hover
                >
                  {item}
                </Link>
              ))}
            </Flex>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              bg={"#fac823"}
              color="black"
              _hover={{ bg: 'red' }} // Efeito de hover para o botão
            />
          </Flex>
        </Container>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {['About', 'Events', 'Projects', 'Team', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => handleScroll(e, item.toLowerCase())} // Adiciona o manipulador de rolagem
                  color="black" 
                  _hover={{ textDecoration: 'underline', color: 'blue.300' }} // Efeito de hover
                >
                  {item}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
