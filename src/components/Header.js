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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="header" bg="black" boxShadow="sm" position="sticky" top={0} zIndex={10}>
        <Container maxW="container.xl">
          <Flex py={4} justifyContent="space-between" alignItems="center">
            <Heading as="h1" size="lg" color="white">
              Cyberene
            </Heading>
            <Flex display={{ base: 'none', md: 'flex' }}>
              {['About', 'Events', 'Projects', 'Team', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  mx={3} 
                  fontWeight="medium" 
                  color="white"
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
              color="white"
              _hover={{ bg: 'gray.700' }} // Efeito de hover para o botão
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
                  onClick={onClose} 
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
