import {HStack, Icon, Text, VStack} from '@gluestack-ui/themed';
import {
  Calendar,
  Compass,
  HomeIcon,
  MessageCircle,
  ScrollText,
  Settings,
  User,
} from 'lucide-react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {};

const BottomNavigationBar = (props: Props) => {
  return (
    <HStack
      w="100%"
      alignItems="center"
      p="$6"
      bg="$white"
      mt="$5"
      justifyContent="space-between"
      position="absolute"
      bottom={0}>
      <TouchableOpacity>
        <Icon
          as={HomeIcon}
          size={25 as any}
          fontSize="$3xl"
          color="$trueGray500"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon as={MessageCircle} size={25 as any} color="$trueGray500" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon as={Calendar} size={25 as any} color="$trueGray500" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon as={Settings} size={25 as any} color="$trueGray500" />
      </TouchableOpacity>
    </HStack>
  );
};

export default BottomNavigationBar;
