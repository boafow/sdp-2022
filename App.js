import { React } from 'react';
import { StyleSheet, View } from 'react-native';
import CameraPage from './src/pages/CameraPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import LogPage from './src/pages/LogPage';
import FoodLogScreen from './src/components/FoodLogScreen';

Amplify.configure(awsconfig)
const Tab = createMaterialBottomTabNavigator();

export default App = () => {
  
  return (
    
    <NavigationContainer>
        <Tab.Navigator 
        initialRouteName='LoginPage'
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        
        >
          <Tab.Screen  name="LoginPage" component={LoginPage} />
          <Tab.Screen name="CameraPage" component={CameraPage} />
          <Tab.Screen name="HomePage" component={HomePage} />
          <Tab.Screen name="LogPage" component={LogPage} />
        </Tab.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: 'red',
    fontColor: 'red'
    
  },
  text: {
    marginBottom: 30
  }
});
