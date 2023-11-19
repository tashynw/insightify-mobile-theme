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
  AvatarImage,
  Image,
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
            <AvatarImage
              source={{
                uri: `https://cdn5.vectorstock.com/i/1000x1000/00/94/isolated-black-man-cartoon-design-vector-33380094.jpg`,
              }}
            />
          </Avatar>
          <Heading size="lg" fontWeight="$medium">
            Welcome, Tashyn
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
              <AvatarImage
                source={{
                  uri: `https://t3.ftcdn.net/jpg/05/98/48/88/360_F_598488869_fiLUgajDxyaoxE9D3SuHMZfD56IjrBXe.jpg`,
                }}
              />
            </Avatar>
            <Text fontWeight="$bold" fontSize="$lg">
              Jill Smith
            </Text>
            <Text fontWeight="$medium" fontSize="$md">
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
            <Avatar size="xl" borderRadius="$full">
              <AvatarFallbackText>Harry Down</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: `https://static.vecteezy.com/system/resources/previews/009/383/461/non_2x/man-face-clipart-design-illustration-free-png.png`,
                }}
              />
            </Avatar>
            <Text fontWeight="$bold" fontSize="$lg">
              Harry Down
            </Text>
            <Text fontWeight="$medium" fontSize="$md">
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
              <Image
                size="md"
                w="100%"
                borderRadius="$none"
                source={{
                  uri: 'https://c8.alamy.com/comp/2RBETNY/contender-work-employees-and-job-interview-cartoon-man-employee-and-interviewer-boss-meeting-at-desk-in-ceo-office-vector-concept-with-flat-character-2RBETNY.jpg',
                }}
              />
              <Text fontWeight="$semibold" fontSize="$lg">
                Getting ready for an interview
              </Text>
            </VStack>
          </Box>
          <Box bg="$purple100" p="$4" borderRadius="$3xl" w={220}>
            <VStack gap="$3" alignItems="center">
              <Image
                size="md"
                w="100%"
                borderRadius="$none"
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/002/896/415/original/books-illustration-cartoon-books-books-vector.jpg',
                }}
              />
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
