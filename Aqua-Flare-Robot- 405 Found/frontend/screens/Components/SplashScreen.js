// components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, Text, Animated, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  // Initialize animation values
  const logoAnimation = new Animated.Value(0);
  const titleAnimation = new Animated.Value(0);
  const subtitleAnimation = new Animated.Value(0);

  useEffect(() => {
    // Sequential animation
    Animated.sequence([
      // Logo animation
      Animated.spring(logoAnimation, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: true,
      }),
      
      // Title animation
      Animated.timing(titleAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),

      // Subtitle animation
      Animated.spring(subtitleAnimation, {
        toValue: 1,
        tension: 20,
        friction: 5,
        useNativeDriver: true,
      }),

      // Pause to show the complete animation
      Animated.delay(800),

      // Fade out everything
      Animated.parallel([
        Animated.timing(logoAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(titleAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(subtitleAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      navigation.replace('FireRobot');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoAnimation,
            transform: [
              { scale: logoAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1]
              })},
            ],
          },
        ]}
      >
        <Image
          source={require('../../assets/fire robot logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.Text
        style={[
          styles.title,
          {
            opacity: titleAnimation,
            transform: [
              { translateY: titleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0]
              })},
            ],
          },
        ]}
      >
        AQUA FLARE
      </Animated.Text>

      <Animated.Text
        style={[
          styles.subtitle,
          {
            opacity: subtitleAnimation,
            transform: [
              { translateX: subtitleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0]
              })},
            ],
          },
        ]}
      >
        Fire Fighting Robot
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF1493',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 3,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 1,
  },
});