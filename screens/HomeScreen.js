import { StatusBar } from 'expo-status-bar';
import React,  { useEffect , useState , useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import { useEffect } from 'react';
import io from "socket.io-client";

//io = require('socket.io-client/socket.io');
//window.navigator.userAgent = 'react-native';
// var io = require("socket.io-client/socket.io");
//import io from 'socket.io-client/socket.io';



export default function HomeScreen() {
 

  // Using useState to save the user input using REACH HOOK useState
    const [messageToSend, setMessageToSend] = useState("");
    const socket = useRef(null);

// USING useEFFECT hook
  useEffect(() => {
    socket.current = io("http://172.20.10.2:3001")
    
  },[]);

  const sendMessage = () => {
    socket.current.emit("message", messageToSend);
    setMessageToSend("");

  }

  return (
    <View style={styles.container}>
      <Text>This is React Native ! Test 8</Text>
      <TextInput 
      value = {messageToSend} 
      onChangeText={text => setMessageToSend(text)} 
      placeholder="Enter chat message.." 
      onSubmitEditing={sendMessage}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
