import {React} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PhoneCamera from './PhoneCamera';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Scanner" component={PhoneCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};