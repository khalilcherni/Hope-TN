import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import { firestore } from '../firebase/config'; 
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [auth, setAuth] = useState(null); // Initialize auth as null
  const navigation = useNavigation();

  const onSignOut = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={onSignOut}>
          <AntDesign name="logout" size={24} />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  useEffect(() => {
    // Initialize auth
    const authInstance = getAuth();
    setAuth(authInstance);
  }, []);

  useEffect(() => {
    if (auth) {
      const unsubscribe = loadMessages();
      return () => {
        unsubscribe();
      };
    }
  }, [auth]);

  const loadMessages = () => {
    const collectionRef = collection(firestore, 'messages');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));

    return onSnapshot(q, querySnapshot => {
      const loadedMessages = [];
      querySnapshot.forEach(doc => {
        loadedMessages.push({
          _id: doc.id,
          createdAt: doc.data().timestamp.toDate(),
          text: doc.data().content,
          user: {
            _id: doc.data().sender,
            name: doc.data().sender 
          }
        });
      });
      setMessages(loadedMessages);
    });
  };

  const onSend = useCallback((messages = []) => {
    if (auth) {
      const { text, user } = messages[0];
      addDoc(collection(firestore, 'messages'), {
        sender: auth.currentUser.uid, 
        receiver: user._id, 
        content: text,
        timestamp: new Date()
      });
    }
  }, [auth]);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={messages => onSend(messages)}
      messagesContainerStyle={{
        backgroundColor: '#fff'
      }}
      textInputStyle={{
        backgroundColor: '#fff',
        borderRadius: 20
      }}
      user={{
        _id: auth && auth.currentUser ? auth.currentUser.uid : '',
        avatar: 'https://i.pravatar.cc/300'
      }}
    />
  );
}
