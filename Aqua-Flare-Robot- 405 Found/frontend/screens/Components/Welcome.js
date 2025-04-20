// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image 
        source={require('../../assets/fire robot logo.png')} 
        style={styles.mascot}
      />
      <Text style={styles.title}>Welcome to Aqua Flare</Text>
      <Text style={styles.subtitle}>
      </Text>
      
      <TouchableOpacity 
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      
      <Text style={styles.copyright}>Created by DevCoders @2025</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF1493',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mascot: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  createAccountButton: {
    backgroundColor: '#FFC300',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
  },
  createAccountText: {
    color: 'black',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFC300',
    alignItems: 'center',
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
  },
  copyright: {
    position: 'absolute',
    bottom: 20,
    color: '#fff',
    fontSize: 12,
  },
});

export default WelcomeScreen;