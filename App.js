import { React } from 'react';
import { StyleSheet, View } from 'react-native';
<<<<<<< HEAD
import Amplify from 'aws-amplify';

import CameraPage from './src/pages/CameraPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createMaterialBottomTabNavigator();

export default App = () => {

=======
import CameraPage from './src/pages/CameraPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)
const Tab = createMaterialBottomTabNavigator();

export default App = () => {
  
>>>>>>> ali_dev
  return (
    <NavigationContainer>
        <Tab.Navigator 
        initialRouteName='LoginPage'
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        >
          <Tab.Screen name="LoginPage" component={LoginPage} />
          <Tab.Screen name="CameraPage" component={CameraPage} />
          <Tab.Screen name="HomePage" component={HomePage} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};
