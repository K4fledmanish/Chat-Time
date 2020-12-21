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
  const [recvMessages, setRecvMessages] = useState([]);
  const socket = useRef(null);

// USING useEFFECT hook
  useEffect(() => {
    socket.current = io("http://172.20.10.2:3001")
    socket.current.on("message", message => {
      setRecvMessages(prevState => [...prevState, message]);
    });
  }, []);

  const sendMessage = () => {
    socket.current.emit("message", messageToSend);
    setMessageToSend("");
  };

  const textOfRecvMessages = recvMessages.map(msg => (
    <Text key={msg}>{msg}</Text>
  ));

  return (
    <View style={styles.container}>
      {textOfRecvMessages}
      <TextInput
        value={messageToSend}
        onChangeText={text => setMessageToSend(text)}
        placeholder="Enter chat messsage.."
        onSubmitEditing={sendMessage}
      />
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
