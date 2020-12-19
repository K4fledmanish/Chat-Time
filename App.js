import { StatusBar } from 'expo-status-bar';
import React,  { useEffect , useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import { useEffect } from 'react';
//let io = require('socket.io-client/socket.io');


window.navigator.userAgent = 'react-native';


var io = require("socket.io-client/socket.io");


export default function App() {

  // Using useState to save the user input
    const [messageToSend, setMessageToSend] = useState("hjhjhjhj");


  useEffect(() => {
    io("http://10.0.0.1:3000")
  },[])

  return (
    <View style={styles.container}>
      <Text>This is React Native ! Test 8</Text>
      <TextInput 
      value = {messageToSend} 
      onChangeText={text => setMessageToSend(test)} 
      placeholder="Enter chat message.." />
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
