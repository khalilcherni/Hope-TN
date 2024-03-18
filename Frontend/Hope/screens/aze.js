// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
// import { sendMessage, isTyping } from 'react-chat-engine';
// import { SendOutlined, PictureOutlined } from '@ant-design/icons';

// const ChatScreen = () => {
//   const [value, setValue] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [chatId, setChatId] = useState('');
//   const [creds, setCreds] = useState('');

//   const handleChange = (text) => {
//     setValue(text);
//     isTyping({ chatId, creds });
//   };

//   const handleSubmit = () => {
//     const text = value.trim();

//     if (text.length > 0) {
//       sendMessage(creds, chatId, { text });
//       setMessages([...messages, { text, sender: { username: 'You' } }]);
//     }

//     setValue('');
//   };

//   const handleUpload = (event) => {
//     sendMessage(creds, chatId, { files: event.nativeEvent.target.files, text: '' });
//   };

//   const MyMessage = ({ message }) => {
//     if (message.attachments && message.attachments.length > 0) {
//       return (
//         <Image
//           source={{ uri: message.attachments[0].file }}
//           style={[styles.messageImage, { alignSelf: 'flex-end' }]}
//         />
//       );
//     }

//     return (
//       <View style={styles.messageContainer}>
//         <Text style={styles.messageText}>{message.text}</Text>
//       </View>
//     );
//   };

//   const TheirMessage = ({ lastMessage, message }) => {
//     const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

//     return (
//       <View style={styles.messageRow}>
//         {isFirstMessageByUser && (
//           <View
//             style={[styles.messageAvatar, { backgroundImage: message.sender && { uri: message.sender.avatar } }]}
//           />
//         )}
//         {message.attachments && message.attachments.length > 0 ? (
//           <Image
//             source={{ uri: message.attachments[0].file }}
//             style={[styles.messageImage, { marginLeft: isFirstMessageByUser ? 4 : 48 }]}
//           />
//         ) : (
//           <View style={[styles.messageContainer, { marginLeft: isFirstMessageByUser ? 4 : 48 }]}>
//             <Text style={styles.messageText}>{message.text}</Text>
//           </View>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Render messages */}
//       <View style={styles.messagesContainer}>
//         {messages.map((message, index) => (
//           <View key={index}>
//             <MyMessage message={message} />
//             {/* <TheirMessage message={message} lastMessage={messages[index - 1]} /> */}
//           </View>
//         ))}
//       </View>

//       {/* Message input */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Send a message..."
//           value={value}
//           onChangeText={handleChange}
//           onSubmitEditing={handleSubmit}
//         />
//         <TouchableOpacity onPress={handleUpload} style={styles.uploadButton}>
//           <PictureOutlined style={styles.pictureIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleSubmit} style={styles.sendButton}>
//           <SendOutlined style={styles.sendIcon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingHorizontal: 10,
//     paddingBottom: 10,
//   },
//   messagesContainer: {
//     flex: 1,
//   },
//   messageRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginVertical: 5,
//   },
//   messageAvatar: {
//     width: 30, // Set the width of the avatar image
//     height: 30, // Set the height of the avatar image
//     borderRadius: 15, // Set the border radius to make it circular
//     marginRight: 5,
//   },
//   messageImage: {
//     width: 200, // Adjust width as needed
//     height: 200, // Adjust height as needed
//   },
//   messageContainer: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#05b57a',
//     maxWidth: '80%', // Adjust max width as needed
//   },
//   messageText: {
//     color: 'white',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     paddingVertical: 5,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginRight: 10,
//   },
//   uploadButton: {
//     padding: 10,
//   },
//   pictureIcon: {
//     fontSize: 24,
//   },
//   sendButton: {
//     padding: 10,
//   },
//   sendIcon: {
//     fontSize: 24,
//   },
// });

// export default ChatScreen;
