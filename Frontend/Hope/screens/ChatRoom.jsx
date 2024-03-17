
import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Chatroom = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation(); 
  useEffect(() => {
    loadMessages();
    joinChatroom('Room 1'); // Initial join when component mounts
  }, []);

  useEffect(() => {
    saveMessages();
  }, [messages]);

  const loadMessages = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem('chatMessages');
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const saveMessages = async () => {
    try {
      await AsyncStorage.setItem('chatMessages', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  };

  const onSend = (newMessages = []) => {
    const updatedMessages = GiftedChat.append(messages, newMessages);
    setMessages(updatedMessages);
    // Emit the new message to the server
    socket.emit('newMessage', newMessages);
  };

  const joinChatroom = (roomName) => {
    // Emit "joinChatroom" event with the room name to the server
    socket.emit('joinChatroom', roomName);
  };

  const inviteUser = () => {
    // Emit "inviteUser" event with the invited user's ID to the server
    socket.emit('inviteUser', invitedUserId);
  };
  const handleHomeNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('Home');
  };
  const handleChatNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('ChatRoom');
  };
  const handleSchoolNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('School');
  };
  const handleMESNavigation = () => {
    // Navigate to the Home screen
    navigation.navigate('Messages');
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer} />
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: userId,
          name: 'Anonymous',
        }}
        style={styles.giftedChat}
      />
      <Button title="Invite User" onPress={inviteUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#209FA6',
  },
  giftedChat: {
    flex: 1,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

//   return (
//     <View style={styles.container}>
//       <View style={styles.backgroundContainer} />
//       <GiftedChat
//         messages={messages}
//         onSend={onSend}
//         user={{
//           _id: userId,
//           name: 'Anonymous',
//         }}
//         style={styles.giftedChat}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: '#209FA6',
//   },
//   giftedChat: {
//     flex: 1,
//   },
// });


export default Chatroom;