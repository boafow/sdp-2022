import { React } from 'react';
import { StyleSheet, View } from 'react-native';
import CameraPage from './src/pages/CameraPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import LogPage from './src/pages/LogPage';
import ProfilePage from './src/pages/ProfilePage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'


Amplify.configure(awsconfig);
const Tab = createMaterialBottomTabNavigator();

export default App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='ProfilePage'
        activeColor='#f0edf6'
        inactiveColor='#3e2465'>

        <Tab.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="login" color={color} size={24} />
            ),
          }} />

        <Tab.Screen
          name="CameraPage"
          component={CameraPage}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera" color={color} size={24} />
            ),
          }} />

        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }} />

        <Tab.Screen
          name="LogPage"
          component={LogPage}
          options={{
            tabBarLabel: 'Log',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book" color={color} size={24} />
            ),
          }} />

          <Tab.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-box" color={color} size={24} />
            ),
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 0
  }
});
