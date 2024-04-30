import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Input, Button, VStack, HStack, Tag, Image, useToast, Container, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import { FaSearch, FaEnvelope } from "react-icons/fa";

// Mock data for developers
const developers = [
  { id: 1, name: "John Doe", location: "New York, USA", technologies: ["React", "Node.js"], image: "https://images.unsplash.com/photo-1469833120660-1a218b53d28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTcxNDQ5NDI4MHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Jane Smith", location: "Berlin, Germany", technologies: ["Go", ".NET"], image: "https://images.unsplash.com/photo-1599314530867-e4977662048b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNzE0NDk0MjgwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Alice Johnson", location: "London, UK", technologies: ["JavaScript", "React"], image: "https://images.unsplash.com/photo-1581091877286-979c6f103cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNzE0NDk0MjgwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Bob Brown", location: "Sydney, Australia", technologies: ["Node.js", "Go"], image: "https://images.unsplash.com/photo-1598482327649-e8831e1505be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTcxNDQ5NDI4MHww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);
  const toast = useToast();

  useEffect(() => {
    const filtered = developers.filter((dev) => dev.name.toLowerCase().includes(searchTerm.toLowerCase()) || dev.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())));
    setFilteredDevelopers(filtered);
  }, [searchTerm]);

  const handleDeveloperClick = (developer) => {
    toast({
      title: `Contact ${developer.name}`,
      description: "This feature is not implemented yet.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="xl">
          Particles Marketplace
        </Heading>
        <Text fontSize="lg">Discover top software talent specialized in web technologies like React, Node.js, .NET, Go, and JavaScript.</Text>
        <Flex w="full">
          <Input placeholder="Search by name or technology..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Button ml={2} leftIcon={<FaSearch />} colorScheme="blue">
            Search
          </Button>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {filteredDevelopers.map((dev) => (
            <Box as="a" href={`/developer/${dev.id}`} key={dev.id} p={5} shadow="md" borderWidth="1px" rounded="md" style={{ textDecoration: "none" }}>
              <VStack>
                <Image borderRadius="full" boxSize="150px" src={dev.image} alt={`Image of ${dev.name}`} />
                <Text fontWeight="bold">{dev.name}</Text>
                <Text>{dev.location}</Text>
                <HStack spacing={2}>
                  {dev.technologies.map((tech) => (
                    <Tag key={tech} colorScheme="blue">
                      {tech}
                    </Tag>
                  ))}
                </HStack>
                <Spacer />
                <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid" onClick={() => handleDeveloperClick(dev)}>
                  Message
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
