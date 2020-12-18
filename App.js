import { StatusBar } from 'expo-status-bar';
import React,  { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { useEffect } from 'react';
//let io = require('socket.io-client/socket.io');


window.navigator.userAgent = 'react-native';


var io = require("socket.io-client/socket.io");


export default function App() {

  useEffect(function(){
    io("http://10.0.0.1:3000")
  },[])

  return (
    <View style={styles.container}>
      <Text>This is React Native ! Test 8</Text>
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
