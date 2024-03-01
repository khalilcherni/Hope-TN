import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
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
       <View style={styles.tabbar}>
          <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}><Text>Home</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('ChatRoom')}><Text>ChatRoom</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Messages')}><Text>Messages</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Setting')}><Text>Setting</Text></TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Setting')}><Text>Setting</Text></TouchableOpacity>
          
        </View>
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

export default Chatroom;
