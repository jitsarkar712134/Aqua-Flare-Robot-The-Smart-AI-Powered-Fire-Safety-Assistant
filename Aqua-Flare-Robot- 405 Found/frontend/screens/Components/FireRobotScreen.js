// components/FireRobotScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function FireRobotScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/robot1.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Aqua Flare</Text>
        <Text style={styles.description}>
          A firefighter robot that detects, navigates,{'\n'}
          and extinguishes fires while ensuring{'\n'}
          safety in hazardous areas.
        </Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Welcome')} // Navigate to ExploreScreen
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#FF1493', 
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    width: '90%',
    height: '90%',
  },
  contentContainer: {
    flex: 0.4,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 90,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
