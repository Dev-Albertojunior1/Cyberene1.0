import React from 'react'
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Container,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Textarea,
  Avatar,
  Link,
  Card,
  CardBody,
  CardFooter,
  Stack,
  extendTheme,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          bg: 'blue.500',
          color: 'white',
          _hover: {
            bg: 'blue.600',
          },
        },
        outline: {
          borderColor: 'blue.500',
          color: 'blue.500',
          _hover: {
            bg: 'blue.50',
          },
        },
      },
    },
  },
})

export default function ITClubWebsite() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        {/* Header */}
        <Box as="header" bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
          <Container maxW="container.xl">
            <Flex py={4} justifyContent="space-between" alignItems="center">
              <Heading as="h1" size="lg" color="blue.500">
                IT Club
              </Heading>
              <Flex display={{ base: 'none', md: 'flex' }}>
                {['About', 'Events', 'Projects', 'Team', 'Contact'].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} mx={3} fontWeight="medium">
                    {item}
                  </Link>
                ))}
              </Flex>
              <IconButton
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
              />
            </Flex>
          </Container>
        </Box>

        {/* Mobile Menu Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                {['About', 'Events', 'Projects', 'Team', 'Contact'].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} onClick={onClose}>
                    {item}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Hero Section */}
        <Box bg="blue.500" color="white" py={{ base: 16, md: 24 }}>
          <Container maxW="container.xl" textAlign="center">
            <Heading as="h2" size="3xl" mb={4}>
              Welcome to IT Club
            </Heading>
            <Text fontSize={{ base: 'xl', md: '2xl' }} mb={8}>
              Empowering the next generation of tech innovators
            </Text>
            <Button size="lg" colorScheme="white" variant="solid">
              Join Us
            </Button>
          </Container>
        </Box>

        {/* About Section */}
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

        {/* Events Section */}
        <Box as="section" id="events" py={{ base: 16, md: 24 }} bg="gray.50">
          <Container maxW="container.xl">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              Upcoming Events
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  title: 'Web Development Workshop',
                  date: 'May 15, 2024',
                  description: 'Learn the basics of HTML, CSS, and JavaScript',
                },
                { title: 'Hackathon 2024', date: 'June 1-2, 2024', description: '48-hour coding challenge with amazing prizes' },
                {
                  title: 'AI and Machine Learning Talk',
                  date: 'June 20, 2024',
                  description: 'Guest speaker from Google discussing the latest in AI',
                },
              ].map((event, index) => (
                <Card key={index}>
                  <CardBody>
                    <Heading size="md" mb={2}>
                      {event.title}
                    </Heading>
                    <Text color="gray.500" mb={2}>
                      {event.date}
                    </Text>
                    <Text>{event.description}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant="outline">Register</Button>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box as="section" id="projects" py={{ base: 16, md: 24 }}>
          <Container maxW="container.xl">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              Our Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                {
                  title: 'Smart Campus App',
                  description: 'A mobile app to help students navigate the campus and access resources',
                  image: '/placeholder.svg?height=200&width=400',
                },
                {
                  title: 'AI Study Buddy',
                  description: 'An AI-powered chatbot to assist students with their studies',
                  image: '/placeholder.svg?height=200&width=400',
                },
                {
                  title: 'Green Tech Initiative',
                  description: 'Developing sustainable technology solutions for the campus',
                  image: '/placeholder.svg?height=200&width=400',
                },
                {
                  title: 'Cybersecurity Awareness Game',
                  description: 'An interactive game to teach students about online safety',
                  image: '/placeholder.svg?height=200&width=400',
                },
              ].map((project, index) => (
                <Card key={index}>
                  <Image src={project.image} alt={project.title} height={200} objectFit="cover" />
                  <CardBody>
                    <Heading size="md" mb={2}>
                      {project.title}
                    </Heading>
                    <Text>{project.description}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Team Section */}
        <Box as="section" id="team" py={{ base: 16, md: 24 }} bg="gray.50">
          <Container maxW="container.xl">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              Our Team
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              {[
                { name: 'Alex Johnson', role: 'President', image: '/placeholder.svg?height=100&width=100' },
                { name: 'Samantha Lee', role: 'Vice President', image: '/placeholder.svg?height=100&width=100' },
                { name: 'Michael Chen', role: 'Technical Lead', image: '/placeholder.svg?height=100&width=100' },
                { name: 'Emily Davis', role: 'Event Coordinator', image: '/placeholder.svg?height=100&width=100' },
              ].map((member, index) => (
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

        {/* Contact Section */}
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

        {/* Footer */}
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
      </Box>
    </ChakraProvider>
  )
}