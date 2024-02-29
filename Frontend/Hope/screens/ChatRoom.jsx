import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chatroom = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadMessages();
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
