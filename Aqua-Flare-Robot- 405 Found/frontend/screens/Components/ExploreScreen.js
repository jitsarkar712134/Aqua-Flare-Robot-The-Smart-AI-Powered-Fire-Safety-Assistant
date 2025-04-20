import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';
import FeaturesScreen from "./FeaturesScreen";
import Contact from './Contact';
import Chatbot from './Chatbot';

// Import number images
import num1 from '../../assets/1.png';
import num2 from '../../assets/2.png';
import num3 from '../../assets/3.png';
import num4 from '../../assets/4.png';
import num5 from '../../assets/5.png';
import num6 from '../../assets/6.png';

const Tab = createBottomTabNavigator();

const ExploreScreen = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
    setShowLogout(false);
    navigation.navigate('FireRobot'); // Navigate to FireRobot screen
  };

  const components = [
    { id: 1, name: 'Flame Sensor', image: require('../../assets/flame-sensor.png') },
    { id: 2, name: 'Gas Sensor', image: require('../../assets/gas-sensor.png') },
    { id: 3, name: 'Arduino', image: require('../../assets/arduino.png') },
    { id: 4, name: 'Gsm Module', image: require('../../assets/gsm.png') },
    { id: 5, name: 'Motor Driver', image: require('../../assets/motor-driver.jpg') },
    { id: 6, name: 'Relay Module', image: require('../../assets/relay.jpeg') },
    { id: 7, name: 'Bo Motor', image: require('../../assets/Bomotor.png') },
    { id: 8, name: 'Water Pump', image: require('../../assets/water-pimp.jpg') },
    { id: 9, name: 'Buck Converter', image: require('../../assets/buck-converter.jpeg') },
    { id: 10, name: 'Battery', image: require('../../assets/battery.jpeg') }
  ];

  const robotWorkSteps = [
    { id: 1, description: 'First, we need to turn on the adapters: 12V (2A) adapter for the GSM module 12V (1A) adapters (2 pieces) for the motor driver and Arduino UNO' },
    { id: 2, description: 'Once the robot is powered on, it continuously scans for fire using three flame sensors (left, right, and middle). If fire is detected, the robot automatically moves towards the fire to extinguish it.' },
    { id: 3, description: 'The relay module activates the pump motor, which starts spraying water to extinguish the fire.' },
    { id: 4, description: 'The GSM module is triggered, and within 5 seconds, a call is sent to the owner, alerting them about the fire incident.' },
    { id: 5, description: 'If any harmful gases such as CNG is detected, an SMS alert is sent to the owner’s device.'},
    { id: 6, description: 'The robot is equipped with high-definition cameras that provide a live video feed, allowing the owner to monitor the situation in real-time.'},
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.welcomeText}>Welcome Guest</Text>
          <TouchableOpacity onPress={() => setShowLogout(true)}>
            <View style={styles.avatarContainer}>
              <Feather name="user" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>
      </View>

      {/* Logout Modal */}
      <Modal
        transparent={true}
        visible={showLogout}
        onRequestClose={() => setShowLogout(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowLogout(false)}
        >
          <View style={styles.logoutContainer}>
            <TouchableOpacity 
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Components Section */}
        <View style={styles.componentsSection}>
          <View style={styles.componentHeader}>
            <Text style={styles.componentTitle}>Explore Components</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {components.map((item) => (
              <TouchableOpacity key={item.id} style={styles.componentCard}>
                <Image source={item.image} style={styles.componentImage} />
                <Text style={styles.componentName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* How Our Robot Works Section */}
        <View style={styles.robotSection}>
          <Text style={styles.robotTitle}>How Our Robot Works</Text>
          <View style={styles.stepsContainer}>
            {robotWorkSteps.map((step, index) => (
              <View key={step.id} style={styles.stepRow}>
                <View style={[styles.stepNumberContainer,{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 2,
                  marginTop:25
                }]}>
                  <Image 
                    source={
                      step.id === 1 ? num1 : 
                      step.id === 2 ? num2 : 
                      step.id === 3 ? num3 : 
                      step.id === 4 ? num4 :
                      step.id === 5 ? num5 :
                      num6
                    } 
                    style={styles.stepNumberImage} 
                  />
                </View>
                <View style={[
                  styles.stepContent,
                  { 
                    backgroundColor: 
                      index === 0 ? '#E6F2FF' :   // Light Blue
                      index === 1 ? '#FFF0E6' :   // Light Orange
                      index === 2 ? '#E6FFE6' :   // Light Green
                      index === 3 ?  '#FFE6F2' :   // Light Pink
                      index === 4 ?  '#E6F2FF' :
                      index === 5 ?  '#FFF0E6' :
                      '#E6FFE6',           
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 2,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 10,
                    marginLeft: 10,
                  }
                ]}>
                  <Text style={styles.stepText}>{step.description}</Text>
                </View>
                {index !== robotWorkSteps.length - 1 && (
                  <View style={styles.connector} />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Bottom Tab Navigator component remains the same
const ExploreWithTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff', height: 60 },
        tabBarActiveTintColor: '#FF1493',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = 'search';
          } else if (route.name === 'Features') {
            iconName = 'grid';
          }
          else if (route.name === 'Contact') {
            iconName = 'user';
          }
          else if (route.name === 'Chatbot') {
            iconName = 'message-circle';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Features" component={FeaturesScreen} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Chatbot" component={Chatbot} />
    </Tab.Navigator>
  );
};

export default ExploreWithTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF1493',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  logoutContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    marginTop: 100,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF1493',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  componentsSection: {
    padding: 20,
  },
  componentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  componentTitle: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#9C27B0',
    fontSize: 14,
  },
  horizontalScroll: {
    flexGrow: 0,
  },
  componentCard: {
    width: 150,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  componentImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  componentName: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginTop: 10,
  },
  robotSection: {
    padding: 20,
  },
  robotTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  stepsContainer: {
    paddingHorizontal: 10,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  stepNumberContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    zIndex: 1,
  },
  stepNumberImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  stepContent: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    marginLeft: -20,
    paddingLeft: 30,
  },
  stepText: {
    fontSize: 14,
    color: '#333',
  },
  connector: {
    position: 'absolute',
    left: 15,
    top: 30,
    width: 2,
    height: 140,
    backgroundColor: '#FF1493',
  },
});