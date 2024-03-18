// // ChatroomContainer.js

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
// import io from 'socket.io-client';
// import { useNavigation } from '@react-navigation/native';

// const ChatroomContainer = () => {
//   const [socket, setSocket] = useState(null);
//   const [chatrooms, setChatrooms] = useState([
//     { name: 'General' },
//     { name: 'Events' },
//     { name: 'Anonymous Help' },
//   ]);

//   const navigation = useNavigation();

//   useEffect(() => {
//     const newSocket = io('http://localhost:4000'); // Update with your server URL
//     setSocket(newSocket);

//     // Clean up socket connection when component unmounts
//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const joinChatroom = (roomName) => {
//     // Emit "joinChatroom" event with the selected room name
//     socket.emit('joinChatroom', roomName);
//     // Navigate to ChatRoom screen
//     navigation.navigate('ChatRoom', { roomName });
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.chatroomContainer}>
//         {chatrooms.map((room, index) => (
//           <View key={index} style={styles.roomItem}>
//             <Text style={styles.roomName}>{room.name}</Text>
//             <Button title="Join" onPress={() => joinChatroom(room.name)} />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   chatroomContainer: {
//     width: '80%',
//   },
//   roomItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 5,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//   },
//   roomName: {
//     fontSize: 16,
//   },
// });

// export default ChatroomContainer;
