import {
  Box,
  HStack,
  Heading,
  Icon,
  VStack,
  Avatar,
  Input,
  InputField,
  ScrollView,
  AvatarFallbackText,
  Text,
} from '@gluestack-ui/themed';
import {MoreHorizontal, Search} from 'lucide-react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {};

const Home = (props: Props) => {
  return (
    <VStack gap="$5" w="100%" mb={70}>
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        <HStack gap="$3" alignItems="center">
          <Avatar bgColor="$amber600" size="sm" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
          </Avatar>
          <Heading size="lg" fontWeight="$medium">
            Welcome, User
          </Heading>
        </HStack>
        <TouchableOpacity>
          <Icon as={MoreHorizontal} size="xl" />
        </TouchableOpacity>
      </HStack>
      <Heading size="xl" fontWeight="$normal">
        Let's find great mentors
      </Heading>
      <Input
        variant="outline"
        size="md"
        borderRadius="$3xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
        alignItems="center">
        <Icon as={Search} color="$coolGray500" size="lg" ml="$3" />
        <InputField color="$coolGray500" placeholder="search your field" />
      </Input>
      <ScrollView horizontal={true}>
        <HStack gap="$5">
          <TouchableOpacity>
            <Box
              bg="$lightBlue200"
              pt="$3.5"
              pb="$3.5"
              pl="$5"
              pr="$5"
              borderRadius="$3xl">
              <Text fontWeight="$semibold">finance</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box
              bg="$coolGray200"
              pt="$3.5"
              pb="$3.5"
              pl="$5"
              pr="$5"
              borderRadius="$3xl">
              <Text fontWeight="$semibold">design</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box
              bg="$coolGray200"
              pt="$3.5"
              pb="$3.5"
              pl="$5"
              pr="$5"
              borderRadius="$3xl">
              <Text fontWeight="$semibold">art</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box
              bg="$coolGray200"
              pt="$3.5"
              pb="$3.5"
              pl="$5"
              pr="$5"
              borderRadius="$3xl">
              <Text fontWeight="$semibold">law</Text>
            </Box>
          </TouchableOpacity>
        </HStack>
      </ScrollView>
      <Heading size="xl" fontWeight="$normal" mt="$4">
        Mentors in your field
      </Heading>
      <HStack justifyContent="space-between">
        <Box bg="$purple200" p="$4" borderRadius="$3xl" w={175}>
          <VStack gap="$3" alignItems="center">
            <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
              <AvatarFallbackText>Jill Smith</AvatarFallbackText>
            </Avatar>
            <Text fontWeight="$semibold" fontSize="$lg">
              Jill Smith
            </Text>
            <Text fontWeight="$semibold" fontSize="$md">
              "Happy to help with your future career in business and
              administration"
            </Text>
            <TouchableOpacity>
              <Box
                bg="$coolGray100"
                pt="$1"
                pb="$1.5"
                pl="$6"
                pr="$6"
                borderRadius="$3xl">
                <Text fontWeight="$semibold">manage</Text>
              </Box>
            </TouchableOpacity>
          </VStack>
        </Box>

        <Box bg="$purple200" p="$4" borderRadius="$3xl" w={175}>
          <VStack gap="$3" alignItems="center">
            <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
              <AvatarFallbackText>Harry Down</AvatarFallbackText>
            </Avatar>
            <Text fontWeight="$semibold" fontSize="$lg">
              Harry Down
            </Text>
            <Text fontWeight="$semibold" fontSize="$md">
              "Happy to guide you on your design future career. Free
              consultation"
            </Text>
            <TouchableOpacity>
              <Box
                bg="$coolGray100"
                pt="$1"
                pb="$1.5"
                pl="$6"
                pr="$6"
                borderRadius="$3xl">
                <Text fontWeight="$semibold">manage</Text>
              </Box>
            </TouchableOpacity>
          </VStack>
        </Box>
      </HStack>
      <Heading size="xl" fontWeight="$normal" mt="$4">
        Articles
      </Heading>
      <ScrollView horizontal={true}>
        <HStack gap="$7">
          <Box bg="$purple100" p="$4" borderRadius="$3xl" w={220}>
            <VStack gap="$3" alignItems="center">
              <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
                <AvatarFallbackText>Harry Down</AvatarFallbackText>
              </Avatar>
              <Text fontWeight="$semibold" fontSize="$lg">
                Getting ready for an interview
              </Text>
            </VStack>
          </Box>
          <Box bg="$purple100" p="$4" borderRadius="$3xl" w={220}>
            <VStack gap="$3" alignItems="center">
              <Avatar bgColor="$amber600" size="xl" borderRadius="$full">
                <AvatarFallbackText>Harry Down</AvatarFallbackText>
              </Avatar>
              <Text fontWeight="$semibold" fontSize="$lg">
                Literature for beginners
              </Text>
            </VStack>
          </Box>
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default Home;
