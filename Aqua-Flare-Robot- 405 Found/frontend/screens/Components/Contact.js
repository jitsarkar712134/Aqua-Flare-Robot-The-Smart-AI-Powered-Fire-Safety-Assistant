import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Linking, Platform } from 'react-native';
import { Feather, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const ContactScreen = () => {
  // Contact information
  const contactInfo = {
    phoneNumber: '+91 9832030883',  
    email: 'jitsarkar712134@gmail.com', 
    socialMedia: {
      instagram: 'https://instagram.com/_____.jitu_______',  
      facebook: 'https://www.facebook.com/jit sarkar /',    
      whatsapp: 'https://wa.me/9332030883',          
      linkedin: 'https://linkedin.com/in/jit-sarkar-a597b6271'  
    }
  };

  // Function to handle phone call
  const handleCall = () => {
    let phoneNumber = contactInfo.phoneNumber;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phoneNumber}`;
    } else {
      phoneNumber = `tel:${phoneNumber}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  // Function to handle email
  const handleEmail = () => {
    const email = contactInfo.email;
    const subject = 'Inquiry about Fire Robot';
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    
    Linking.canOpenURL(emailUrl)
      .then(supported => {
        if (!supported) {
          alert('Email is not available');
        } else {
          return Linking.openURL(emailUrl);
        }
      })
      .catch(err => console.log(err));
  };

  // Function to handle social media links
  const handleSocialMedia = (platform) => {
    const url = contactInfo.socialMedia[platform];
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          alert(`Cannot open ${platform}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.welcomeText}>Contact with Us</Text>
        </View>
      </View>

      {/* Contact Content */}
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.subtitle}>
          Our Contact Details
        </Text>

        {/* Contact Cards */}
        <View style={styles.contactCardsContainer}>
          <TouchableOpacity 
            style={[styles.contactCard, { backgroundColor: '#FFD699' }]}
            onPress={handleCall}
          >
            <View style={styles.iconContainer}>
              <Feather name="phone" size={24} color="white" />
            </View>
            <Text style={styles.cardTitle}>Call us</Text>
            <Text style={styles.cardSubtitle}>Our team is on the line</Text>
            <Text style={styles.cardTime}>Mon-Fri • 9-17</Text>
            <Text style={styles.contactDetail}>{contactInfo.phoneNumber}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.contactCard, { backgroundColor: '#A1F4A1' }]}
            onPress={handleEmail}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons name="email" size={24} color="white" />
            </View>
            <Text style={styles.cardTitle}>Email us</Text>
            <Text style={styles.cardSubtitle}>Our team is online</Text>
            <Text style={styles.cardTime}>Mon-Fri • 9-17</Text>
            <Text style={styles.contactDetail}>{contactInfo.email}</Text>
          </TouchableOpacity>
        </View>

        {/* Social Media Section */}
        <Text style={styles.socialTitle}>Contact us in Social Media</Text>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#F537C0' }]}
            onPress={() => handleSocialMedia('instagram')}
          >
            <FontAwesome name="instagram" size={24} color="white" />
            <Text style={styles.socialText}>Instagram</Text>
            <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#1877F2' }]}
            onPress={() => handleSocialMedia('facebook')}
          >
            <FontAwesome name="facebook" size={24} color="white" />
            <Text style={styles.socialText}>Facebook</Text>
            <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#25D366' }]}
            onPress={() => handleSocialMedia('whatsapp')}
          >
            <FontAwesome5 name="whatsapp" size={24} color="white" />
            <Text style={styles.socialText}>WhatsApp</Text>
            <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#0A66C2' }]}
            onPress={() => handleSocialMedia('linkedin')}
          >
            <FontAwesome name="linkedin" size={24} color="white" />
            <Text style={styles.socialText}>LinkedIn</Text>
            <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 22,
  },
  contactCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  contactCard: {
    width: '48%',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#444',
  },
  cardTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  contactDetail: {
    fontSize: 12,
    color: '#444',
    marginTop: 5,
    fontWeight: '500',
  },
  socialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  socialContainer: {
    gap: 10,
  },
  socialButton: { 
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 15,
    color: '#fff',
  },
});

export default ContactScreen;