import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  TextInput, 
  FlatList, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RobotAvatar = require('../../assets/fire robot logo.png'); 

const Chatbot = ({ navigation }) => {
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    const userMessage = { 
      id: `user_${messages.length}`, 
      text: inputText, 
      sender: 'user' 
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/chatbot/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: inputText })
      });
      const data = await response.json();
      const botResponse = { 
        id: `bot_${messages.length + 1}`, 
        text: data.response || "I'm not sure I understand.", 
        sender: 'bot' 
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageContainer, 
      { justifyContent: item.sender === 'user' ? 'flex-end' : 'flex-start' }
    ]}>
      {item.sender === 'bot' && (
        <Image 
          source={RobotAvatar} 
          style={styles.robotAvatar} 
          resizeMode="cover"
        />
      )}
      <View style={[
        styles.messageBubble, 
        item.sender === 'user' ? styles.userMessage : styles.botMessage
      ]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  if (!chatStarted) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.welcomeText}>Aqua Flare ChatBot</Text>
          </View>
        </View>
        <View style={styles.startScreenContent}>
          <Image 
            source={RobotAvatar} 
            style={styles.largeAvatar} 
            resizeMode="cover"
          />
          <TouchableOpacity 
            style={styles.startButton} 
            onPress={() => setChatStarted(true)}
          >
            <Text style={styles.startButtonText}>Start Chat</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.welcomeText}>Aqua Flare ChatBot</Text>
        </View>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="paper-plane" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF1493',
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  startScreenContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  largeAvatar: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  startButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 10
  },
  robotAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  messageList: {
    flex: 1
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10
  },
  userMessage: {
    backgroundColor: '#318aff',
  },
  botMessage: {
    backgroundColor: '#e5e5ea'
  },
  messageText: {
    color: 'black'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    height: 50
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 25,
    width: 50,
    height: 50
  }
});

export default Chatbot;
