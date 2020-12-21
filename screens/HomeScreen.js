import { StatusBar } from 'expo-status-bar';
import React,  { useEffect , useState , useRef } from 'react';
import { Text, View, TextInput, Platform, KeyboardAvoidingView  } from 'react-native';
//import { useEffect } from 'react';
import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat'


//io = require('socket.io-client/socket.io');
//window.navigator.userAgent = 'react-native';
// var io = require("socket.io-client/socket.io");
//import io from 'socket.io-client/socket.io';



export default function HomeScreen() {
  // Using useState to save the user input using REACH HOOK useState
  const [messageToSend, setMessageToSend] = useState("");
  const [recvMessages, setRecvMessages] = useState([]);
  const socket = useRef(null);

// USING useEFFECT hook
  useEffect(() => {
    socket.current = io("http://172.20.10.2:3001")
    socket.current.on("message", message => {
      debugger;
      console.log("message", message);
      setRecvMessages(prevState => GiftedChat.append(prevState, message));
    });
  }, []);

  const onSend = messages => {
    console.log(messages);
    socket.current.emit("message", messages[0].text);
    setRecvMessages(prevState => GiftedChat.append(prevState, messages));
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={recvMessages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1
        }}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}
