import { StatusBar } from 'expo-status-bar';
import React,  { useEffect , useState , useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import { useEffect } from 'react';
window.navigator.userAgent = 'react-native';
let io = require('socket.io-client/socket.io');
// var io = require("socket.io-client/socket.io");

//import io from "socket.io-client";


export default function App() {
 

  // Using useState to save the user input using REACH HOOK useState
    const [messageToSend, setMessageToSend] = useState("");
    const socket = useRef(null);

// USING useEFFECT hook
  useEffect(() => {
    socket.current = io("http://10.0.0.1:3000")
    
  },[]);

  const sendMessage = () => {
    socket.current.emit("message", messageToSend);

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
