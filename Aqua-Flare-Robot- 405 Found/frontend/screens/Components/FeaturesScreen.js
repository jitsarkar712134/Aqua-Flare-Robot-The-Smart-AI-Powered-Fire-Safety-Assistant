import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const FeatureScreen = () => {
  const features = [
    {
      image: require('../../assets/fire.png'),
      title: 'Fire Detection',
      description: 'Uses sensors to detect fire and smoke.',
      color: '#D4F5D4',
    },
    {
      image: require('../../assets/image 3.png'),
      title: 'Autonomous Navigation',
      description: 'Moves automatically to the fire source.',
      color: '#BFD4F2',
    },
    {
      image: require('../../assets/image 4.png'),
      title: 'Obstacle Avoidance',
      description: 'Avoids obstacles while reaching the fire.',
      color: '#FFF4CC',
    },
    {
      image: require('../../assets/image 5.png'),
      title: 'Emergency Alerts',
      description: 'Sends alerts when fire is detected.',
      color: '#FFD4D4',
    },
    {
      image: require('../../assets/image 6.png'),
      title: 'SMS Alert',
      description: 'Sends an SMS notification when dangerous gases are detected.',
      color: '#D4F5D4',
    },
    {
      image: require('../../assets/image 7.png'),
      title: 'Camera System',
      description: 'Live video streaming for real-time monitoring.',
      color: '#FFD4B3',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.welcomeText}>Welcome Guest</Text>
          <TouchableOpacity>
            <Feather name="bell" size={24} color="white" />
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

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <View style={styles.featureHeader}>
          <Text style={styles.featureTitle}>Our Features</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {features.map((feature, index) => (
            <View 
              key={index} 
              style={[styles.featureCard, { backgroundColor: feature.color }]}
            >
              <View style={styles.imageContainer}>
                <Image source={feature.image} style={styles.featureImage} />
              </View>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureItemTitle}>
                  {feature.title} – {feature.description}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

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
  featuresSection: {
    flex: 1,
    padding: 20,
  },
  featureHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#9C27B0',
    fontSize: 14,
  },
  scrollContent: {
    gap: 15,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
    marginBottom: 5,
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 12,
    marginRight: 15,
  },
  featureImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  featureTextContainer: {
    flex: 1,
  },
  featureItemTitle: {
    fontSize: 16,
    color: '#000',
    flexWrap: 'wrap',
  },
});

export default FeatureScreen;