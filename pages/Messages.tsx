import {
  HStack,
  Heading,
  Icon,
  Input,
  InputField,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import {Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import BottomNavigationBar from '../components/BottomNavigationBar';
import {
  ChevronLeft,
  FileEdit,
  MoreHorizontal,
  Search,
} from 'lucide-react-native';
import ConversationTile from '../components/ConversationTile';

type Props = {
  navigation: any;
};

export default function MessagesPage({navigation}: Props) {
  return (
    <>
      <SafeAreaView>
        <ScrollView minHeight={Dimensions.get('window').height as any}>
          <VStack gap="$5" w="100%" p="$5" mb={70}>
            <HStack justifyContent="space-between" alignItems="center">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon as={ChevronLeft} size="xl" />
              </TouchableOpacity>

              <Heading size="lg" color="$coolGray600">
                Messages
              </Heading>
              <TouchableOpacity>
                <Icon as={MoreHorizontal} size="xl" />
              </TouchableOpacity>
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
              <Heading size="md" color="$coolGray600">
                New Group
              </Heading>
              <TouchableOpacity>
                <Icon as={FileEdit} size="xl" />
              </TouchableOpacity>
            </HStack>
            <Input
              variant="outline"
              size="lg"
              borderRadius="$3xl"
              borderWidth="$2"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              alignItems="center">
              <Icon as={Search} color="$coolGray500" size="lg" ml="$3" />
              <InputField color="$coolGray500" placeholder="Search" />
            </Input>
            <ConversationTile />
            <ConversationTile />
            <ConversationTile />
            <ConversationTile />
            <ConversationTile />
            <ConversationTile />
            <ConversationTile />
          </VStack>
        </ScrollView>
        <BottomNavigationBar navigation={navigation} />
      </SafeAreaView>
    </>
  );
}
