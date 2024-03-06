import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet, Image,Dimensions } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
const ChatBubble = ({ onPress }) => {

  return (
    <TouchableOpacity style={styles.fullScreenContainer} onPress={onPress}>
      <Image
        source={{ uri: "https://i.pinimg.com/originals/4b/cb/1f/4bcb1fb72d1d08efa44efa5ceb712ec7.gif" }}
        style={styles.chatIcon}
      />
    </TouchableOpacity>
  );
};

const ChatInterface = ({ onClose, onSendMessage, messages, input, setInput }) => {
  const navigation = useNavigation();
  const handleHomeNavigation = () => {
    navigation.navigate('Home');
    setIsClicked(true);
  };
  const handleChatNavigation = () => {
    navigation.navigate('ChatRoom');
    setIsClicked(true);
  };
  const handleSchoolNavigation = () => {
    navigation.navigate('School');
    setIsClicked(true);
  };
  const handleMESNavigation = () => {
    navigation.navigate('Messages');
    setIsClicked(true);
  };
  const renderMessage = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{`${item.sender}: ${item.text}`}</Text>
        {item.response && <Text style={styles.messageText}>{`Bot: ${item.response}`}</Text>}
      </View>
    );
  };

  const sendMessage = () => {
    if (input.trim() === '') {
      return;
    }

    if (input.trim().toLowerCase() === 'home') {
      navigation.navigate('Home');
      setInput('');
      return;
    } else if (input.trim().toLowerCase() === 'help') {
      navigation.navigate('Helping');
      setInput('');
      return;
    } else if (input.trim().toLowerCase() === 'school') {
      navigation.navigate('School');
      setInput('');
      return;
    }
    else if (input.trim().toLowerCase() === 'events') {
      navigation.navigate('Events');
      setInput('');
      return;
    }

    const userIcon = '👤';
    const userMessage = { id: messages.length, text: input, sender: userIcon};
    onSendMessage(userMessage);
    setInput('');
  };

  return (
    <View style={styles.chatInterface}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <FontAwesome5 name="paper-plane" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <MaterialIcons name="close" size={18} color="black" />
      </TouchableOpacity>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.tabItem} onPress={handleHomeNavigation}><AntDesign name="home" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleChatNavigation}><Ionicons name="chatbox-ellipses-outline" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleSchoolNavigation}><MaterialCommunityIcons name="school-outline" size={width * 0.06} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={handleMESNavigation}><MaterialCommunityIcons name="android-messages" size={width * 0.06} color="black" /></TouchableOpacity>
      </View>
    </View>
  );
};

const ChatScreen = () => {
  const navigation = useNavigation();

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = (message) => {
    setMessages([...messages, message]);

    setTimeout(() => {
      let botMessage = '';
      const userInput = message.text.trim();

      const isArabic = /[\u0600-\u06FF]/.test(userInput);
      const isEnglish = /^[a-zA-Z0-9\s,.'!?]*$/.test(userInput);

      if (isArabic) {
        if (userInput.includes('مرحبا')) {
          botMessage = 'مرحبًا كيف يمكنني مساعدتك اليوم؟';
        } else if (userInput.includes('كيف حالك؟')) {
          botMessage = "أنا مجرد روبوت، لذا أنا دائمًا مستعد لمساعدتك!";
        } else if (userInput.includes('الفقر')) {
          botMessage = 'الفقر في تونس لا يزال تحديًا كبيرًا، حيث بلغ معدل الفقر حوالي 15.2٪ في عام 2019. تُسهم معدلات البطالة العالية، خاصة بين الشباب، في هذه المشكلة. توجد اختلافات إقليمية، حيث تعاني المناطق الداخلية من معدلات فقر أعلى. كما أن جائحة COVID-19 قد فاقمت التحديات الاقتصادية، مما يبرز ضعف بعض السكان.';
        } else if (userInput.includes('المشردين')) {
          botMessage = 'البيتونة هي قلق في تونس، خاصة في المناطق الحضرية. يسهم نقص الإسكان الميسور، والبنية التحتية غير الكافية، والمستوطنات غير الرسمية في إنعدام الأمن السكني للعديد من التونسيين. تهدف جهود المنظمات غير الحكومية والمبادرات الحكومية إلى معالجة هذه المشكلة من خلال خدمات الدعم والمبادرات التي تعزز التنمية الاقتصادية والاندماج الاجتماعي.';
        } else {
          botMessage = "آسف، لا أملك معلومات حول ذلك. هل هناك شيء آخر يمكنني مساعدتك فيه؟";
        }
      } else if (isEnglish) {
        if (userInput.includes('hello')) {
          botMessage = 'Hi there! How can I assist you today?';
        } else if (userInput.includes('how are you?')) {
          botMessage = "I'm just a bot, so I'm always ready to assist you!";
        } else if (userInput.includes('poverty')) {
          botMessage = 'Poverty in Tunisia remains a significant challenge, with a poverty rate of around 15.2% in 2019. High unemployment rates, especially among youth, contribute to this issue. Regional disparities exist, with interior regions experiencing higher poverty rates. The COVID-19 pandemic has also exacerbated economic challenges, highlighting the vulnerability of certain populations.';
        } else if (userInput.includes('homelessness')) {
          botMessage = 'Homelessness is a concern in Tunisia, particularly in urban areas. The lack of affordable housing, inadequate infrastructure, and informal settlements contribute to housing insecurity for many Tunisians. Efforts by NGOs and government initiatives aim to address this issue through support services and initiatives promoting economic development and social inclusion.';
        } else {
          botMessage = "I'm sorry, I don't have information about that. Is there anything else I can help you with?";
        }
      } else {
        botMessage = "I'm sorry, I couldn't determine the language of your query. Please try again.";
      }
      const botIcon = '🤖';
      const botResponse = { id: messages.length + 1, text: botMessage, sender: botIcon};
      setMessages([...messages, botResponse]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {!isChatOpen && <ChatBubble onPress={toggleChat} />}
      {isChatOpen && (
        <ChatInterface
          onClose={toggleChat}
          onSendMessage={sendMessage}
          messages={messages}
          input={input}
          setInput={setInput}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  fullScreenContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  chatIcon: {
    width: 500,
    height: 530,
    alignItems: "center",
    marginHorizontal: 50,
    marginLeft: 50
  },
  bubbleContainer: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bubbleText: {
    color: '#fff',
    fontSize: 16,
  },
  chatInterface: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '107%',
  },
  messageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom:40
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: 80,
    marginRight: 10,
    height: 50,
    marginBottom: -40
  },
  sendButton: {
    backgroundColor: '#209FA6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: -30,
    alignSelf: 'flex-end',
    marginBottom:20
  },
  closeButtonText: {
    color: '#333',
    fontSize: 16,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  
    paddingVertical: height * 0.02,
    position: 'absolute',
    bottom: -15,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ChatScreen;
