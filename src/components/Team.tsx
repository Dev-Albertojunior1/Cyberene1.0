import React from 'react';
import { Box, Avatar, Heading, Text, Flex, SimpleGrid } from '@chakra-ui/react';

interface Member {
  id: number;
  name: string;
  role: string;
  imageUrl?: string;
}

const clubMembers: Member[] = [
  { id: 1, name: "Jonah Marwa", role: "Patron", imageUrl: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Emmanuel", role: "Chairman", imageUrl: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Roselyn", role: "vice chair", imageUrl: "/placeholder.svg?height=100&width=100" },
  { id: 4, name: "Alberto Junior", role: "CIA", imageUrl: "/placeholder.svg?height=100&width=100" },
  { id: 5, name: "Prudence", role: "Secretary", imageUrl: "/placeholder.svg?height=100&width=100" },
  { id: 6, name: "Stan", role: "Tech.Lead", imageUrl: "/placeholder.svg?height=100&width=100" },
  { id: 7, name: "Fidel", role: "Communication", imageUrl: "/placeholder.svg?height=100&width=100" },
  { id: 8, name: "Jeff", role: "Tresure", imageUrl: "/placeholder.svg?height=100&width=100" },
];

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <Box
    textAlign="center"
    p={4}
    bg="white"
    borderRadius="lg"
    boxShadow="md"
    transition="transform 0.2s"
    _hover={{ transform: 'scale(1.05)' }}
  >
    <Avatar size="lg" name={member.name} src={member.imageUrl} mb={2} />
    <Heading size="md">{member.name}</Heading>
    <Text color="gray.500">{member.role}</Text>
  </Box>
);

export default function ClubFamilyTree() {
  const president = clubMembers[0];
  const otherMembers = clubMembers.slice(1);

  return (
    <Box p={4} bg="gray.100" minH="100vh">
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Team
      </Heading>
      <Flex direction="column" align="center" maxW="4xl" mx="auto">
        {/* Cartão do Presidente */}
        <Flex justify="center" mb={4}>
          <MemberCard member={president} />
        </Flex>
        {/* Linha de Conexão */}
        <Box w="1px" h="12" bg="gray.300" mx="auto" />
        {/* Cartões dos outros membros */}
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={4} mt={4}>
          {otherMembers.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
