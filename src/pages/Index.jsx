import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaDog, FaHeart, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Welcome to DogLove
              </Heading>
              <Text fontSize="xl" mb={8}>
                Discover the joy of having a furry best friend. Adopt a dog today!
              </Text>
              <Button colorScheme="blue" size="lg">
                Find Your Dog
              </Button>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1583511666445-775f1f2116f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3MTEzNzMwMTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Happy Dog" />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Why Adopt from Us?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center">
              <Icon as={FaDog} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Healthy Dogs
              </Heading>
              <Text>All our dogs are vaccinated, spayed/neutered, and healthy.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaHeart} boxSize={12} color="red.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Lots of Love
              </Heading>
              <Text>Our dogs are raised with love and care in foster homes.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaShieldAlt} boxSize={12} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Lifetime Support
              </Heading>
              <Text>We provide lifetime support for all our adopted dogs.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Adopt?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Take the first step towards bringing joy to your life and a dog's life.
          </Text>
          <Button colorScheme="blue" size="lg">
            View Our Dogs
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
