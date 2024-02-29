import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    return messages.map((message, index) => {
      const lastMessage = messages[index - 1];
      const isMyMessage = message.sender.username === userName;
      
      return (
        <View key={`msg_${index}`} style={styles.messageContainer}>
          {isMyMessage 
            ? <MyMessage message={message} /> 
            : <TheirMessage message={message} lastMessage={lastMessage} />}
        </View>
      );
    });
  };

  if (!chat) return <View />;

  return (
    <View style={styles.chatFeed}>
      <View style={styles.chatTitleContainer}>
        <Text style={styles.chatTitle}>{chat.title}</Text>
        <Text style={styles.chatSubtitle}>
          {chat.people.map(person => ` ${person.person.username}`)}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {renderMessages()}
      </ScrollView>
      <View style={styles.messageFormContainer}>
        <MessageForm {...props} chatId={activeChat} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatFeed: {
    flex: 1,
  },
  chatTitleContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatSubtitle: {
    fontSize: 16,
  },
  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    marginBottom: 20,
  },
  messageFormContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
});

export default ChatFeed;