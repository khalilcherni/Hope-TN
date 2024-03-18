// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// const Chatbot = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [lastQuestion, setLastQuestion] = useState('');

//   const handleMessage = (userInput) => {
//     switch (userInput.toLowerCase()) {
//       case 'hello':
//         addMessage('Bot', 'Hi there!');
//         break;
//       case 'how are you?':
//         addMessage('Bot', "I'm just a bot, so I don't have feelings, but thanks for asking!");
//         break;
//       case 'tell me about poverty in tunisia':
//         addMessage('Bot', 'Poverty in Tunisia remains a significant challenge...');
//         setLastQuestion('poverty');
//         break;
//       case 'tell me about homelessness in tunisia':
//         addMessage('Bot', 'Homelessness is a concern in Tunisia, particularly in urban areas...');
//         setLastQuestion('homelessness');
//         break;
//       case 'explain more':
//         if (lastQuestion === 'poverty') {
//           addMessage('Bot', 'Poverty is a complex issue influenced by various factors...');
//         } else if (lastQuestion === 'homelessness') {
//           addMessage('Bot', 'Homelessness is not just about lacking shelter; it often stems from broader issues...');
//         } else {
//           addMessage('Bot', "I'm not sure what you want me to explain more about. Please ask me about poverty or homelessness first.");
//         }
//         break;
//       case 'bye':
//         addMessage('Bot', 'Goodbye!');
//         break;
//       default:
//         addMessage('Bot', "I'm sorry, I don't understand.");
//         break;
//     }
//   };

//   const addMessage = (sender, text) => {
//     setMessages([...messages, { sender, text }]);
//   };

//   const sendMessage = () => {
//     addMessage('User', input);
//     handleMessage(input);
//     setInput('');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
//         <TextInput
//           style={{ flex: 1, borderWidth: 1, padding: 10, marginRight: 10 }}
//           value={input}
//           onChangeText={setInput}
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//       {messages.map((message, index) => (
//         <Text key={index} style={{ textAlign: message.sender === 'User' ? 'right' : 'left' }}>
//           {`${message.sender}: ${message.text}`}
//         </Text>
//       ))}
//     </View>
//   );
// };

// export default Chatbot;
