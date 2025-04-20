// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FireRobotScreen from './screens/Components/FireRobotScreen';
import ExploreScreen from './screens/Components/ExploreScreen';
import Tabs from './screens/Components/Tabs';
import Chatbot from './screens/Components/Chatbot';
import SplashScreen from './screens/Components/SplashScreen';
import WelcomeScreen from './screens/Components/Welcome';
import RegisterScreen from './screens/Components/RegisterScreen';
import LoginScreen from './screens/Components/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Splash' 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        />

        <Stack.Screen
        name='Register'
        component={RegisterScreen}
        />
        <Stack.Screen
        name='Login'
        component={LoginScreen}
        />
        <Stack.Screen 
          name='Splash' 
          component={SplashScreen} 
        />
        <Stack.Screen
          name='FireRobot'
          component={FireRobotScreen}
        />
        <Stack.Screen
          name='Explore'
          component={ExploreScreen}
        />
        <Stack.Screen 
          name="Main" 
          component={Tabs} 
        />
        <Stack.Screen 
          name="Chatbot" 
          component={Chatbot} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;