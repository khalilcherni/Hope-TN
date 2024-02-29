import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// var ImagePicker = require('react-native-image-picker');


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
<<<<<<< HEAD
      <ScrollView style={styles.messageContainer}>
        {messages.map(message => (
          <MessageCard
            key={message.id}
            {...message}
            onDelete={handleDeleteMessage}
            onComment={handleComment}
          />
        ))}
      </ScrollView>
=======
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
>>>>>>> 1b49454fa91048add8e02ac3654b54632fb40b30
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
  },
  messageContainer: {
    flex: 1,
=======
    
  },
  messageContainer: {
    flex: 1,
    marginTop:50
>>>>>>> 1b49454fa91048add8e02ac3654b54632fb40b30
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
<<<<<<< HEAD
    marginBottom: 20,
=======
    marginBottom: 40,
>>>>>>> 1b49454fa91048add8e02ac3654b54632fb40b30
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
  commentsText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  commentText: {
    marginBottom: 5,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  addCommentButton: {
    backgroundColor: 'blue',
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addCommentButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
  choosePhotoButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  choosePhotoButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BottomAppBar;
