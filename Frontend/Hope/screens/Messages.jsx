import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MessageCard = ({ id, primary, secondary, person, rating, imageUrl, onDelete }) => (
  <View style={styles.messageCard}>
    <Image source={{ uri: person }} style={styles.avatar} />
    <View style={styles.messageContent}>
      <Text style={styles.primaryText}>{primary}</Text>
      <Text style={styles.secondaryText}>{secondary}</Text>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.messageImage} />}
      <Text>Rating: {rating}</Text>
    </View>
    <TouchableOpacity onPress={() => onDelete(id)}>
      <Text>Delete</Text>
    </TouchableOpacity>
  </View>
);

const BottomAppBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [ratingValue, setRatingValue] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [messages, setMessages] = useState([]);

  // Load messages from AsyncStorage when component mounts
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const storedMessages = await AsyncStorage.getItem('messages');
        if (storedMessages !== null) {
          setMessages(JSON.parse(storedMessages));
        }
      } catch (error) {
        console.error('Error loading messages:', error);
      }
    };
    loadMessages();
  }, []);

  // Save messages to AsyncStorage whenever messages state changes
  useEffect(() => {
    const saveMessages = async () => {
      try {
        await AsyncStorage.setItem('messages', JSON.stringify(messages));
      } catch (error) {
        console.error('Error saving messages:', error);
      }
    };
    saveMessages();
  }, [messages]);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handlePostMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        primary: inputValue,
        secondary: 'New message',
        person: 'https://example.com/avatar.jpg', // Replace with actual avatar URL
        imageUrl: imageUrl,
        rating: ratingValue,
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputValue('');
      setRatingValue(0);
      setImageUrl('');
    }
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    setMessages(updatedMessages);
  };

  const handleImageUrlChange = (text) => {
    setImageUrl(text);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messageContainer}>
        {messages.map(message => (
          <MessageCard
            key={message.id}
            {...message}
            onDelete={handleDeleteMessage}
          />
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter image URL (optional)"
          value={imageUrl}
          onChangeText={handleImageUrlChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          value={inputValue}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePostMessage}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  primaryText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  secondaryText: {
    marginBottom: 5,
  },
  messageImage: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BottomAppBar;
