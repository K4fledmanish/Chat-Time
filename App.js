import { StatusBar } from 'expo-status-bar';
import React,  { useEffect , useState , useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import { useEffect } from 'react';
window.navigator.userAgent = 'react-native';
let io = require('socket.io-client/socket.io');
// var io = require("socket.io-client/socket.io");

//import io from "socket.io-client";
import HomeScreen from './screens/HomeScreen'

export default function App() {
 
  return (
    <HomeScreen/>
  );
}


