import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';

const Chatroom = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [invitedUserId, setInvitedUserId] = useState('');
  const socket = io('http://192.168.202.196:4000'); // Connect to the WebSocket server

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
});

export default Chatroom;
