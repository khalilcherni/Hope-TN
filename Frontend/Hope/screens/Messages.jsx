import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// var ImagePicker = require('react-native-image-picker');
import { useNavigation } from '@react-navigation/native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const MessageCard = ({ id, primary, secondary, person, imageUrl, comments, onDelete, onComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      onComment(id, newComment.trim());
      setNewComment('');
    }
  };

  return (
    <View style={styles.messageCard}>
      <Image source={{ uri: person }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <Text style={styles.primaryText}>{primary}</Text>
        <Text style={styles.secondaryText}>{secondary}</Text>
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.messageImage} />}
     
        <Text style={styles.commentsText}>Comments:</Text>
        {comments.map((comment, index) => (
          <Text key={`${id}_${index}`} style={styles.commentText}>{comment}</Text>
        ))}
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity style={styles.addCommentButton} onPress={handleAddComment}>
            <Text style={styles.addCommentButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const BottomAppBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [ratingValue, setRatingValue] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation(); 
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
  const handlePostMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        primary: inputValue,
        secondary: 'New message',
        person: 'https://example.com/avatar.jpg', // Replace with actual avatar URL
        imageUrl: imageUrl,
        rating: ratingValue,
        comments: [], // Initialize comments array for each new message
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputValue('');
      setRatingValue(0);
      setImageUrl('');
      Alert.alert('Message Posted', 'Your message has been posted successfully.');
    }
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    setMessages(updatedMessages);
  };

  const handleComment = (id, comment) => {
    const updatedMessages = messages.map(message => {
      if (message.id === id) {
        return {
          ...message,
          comments: [...message.comments, comment],
        };
      }
      return message;
    });
    setMessages(updatedMessages);
  };

  const handleChoosePhoto = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = response.uri;
        setImageUrl(source);
      }
    });
  };

  return (
    <View style={styles.container}>
  <ScrollView style={styles.messageContainer}>
  {messages.map(message => (
    <MessageCard
      key={`message_${message.id}`} // Ensure each MessageCard has a unique key based on its id
      {...message}
      onDelete={handleDeleteMessage}
      onComment={handleComment}
    />
  ))}
</ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.choosePhotoButton} onPress={handleChoosePhoto}>
          <Text style={styles.choosePhotoButtonText}>Choose Photo</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          value={inputValue}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePostMessage}>
          <Text style={styles.postButtonText}>Post Message</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={24} color="black" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    fontSize: 18,
  },
  secondaryText: {
    marginBottom: 10,
    fontSize: 16,
  },
  messageImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  commentsText: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  commentText: {
    marginBottom: 5,
    fontSize: 14,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
    fontSize: 14,
  },
  addCommentButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addCommentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  deleteButton: {
    marginLeft: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#dc3545',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 16,
  },
  choosePhotoButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  choosePhotoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});
export default BottomAppBar;
