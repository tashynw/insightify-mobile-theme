import {
  HStack,
  Heading,
  Avatar,
  AvatarFallbackText,
  Text,
  VStack,
  AvatarImage,
} from '@gluestack-ui/themed';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const ConversationTile = () => {
  return (
    <TouchableOpacity>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        mt="$3"
        mb="$3">
        <HStack gap="$3" alignItems="center" w="65%" pr="$3">
          <Avatar bgColor="$amber600" size="lg" borderRadius="$full">
            <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: `https://cdn5.vectorstock.com/i/1000x1000/00/94/isolated-black-man-cartoon-design-vector-33380094.jpg`,
              }}
            />
          </Avatar>
          <VStack alignItems="flex-start">
            <HStack justifyContent="space-between" w="100%" alignItems="center">
              <Heading size="lg" fontWeight="bold">
                Sheryl Banks
              </Heading>
              <Text fontWeight="$normal" fontSize="$sm" numberOfLines={1}>
                7:20pm
              </Text>
            </HStack>
            <Text fontWeight="$normal" fontSize="$md" numberOfLines={1}>
              Yeah that works. Lets meet at 6PM at Half Way Tree
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default ConversationTile;
