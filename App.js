import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import Card from './Card'
import LoginPage from './Login';
export default function App() {
  return(
    <View >
      <LoginPage />
    </View>
  );
  
  /*
  return (  
    <View style="styles.container">
      <Card 
        name={"Calories"}
        currValue={1500}
        targetValue={2000}
        units={"cals"}
      /> 
      <Card 
        name={"Carbs"}
        currValue={100}
        targetValue={300}
        units={"g"}
      /> 
      <Card 
        name={"Protein"}
        currValue={100}
        targetValue={200}
        units={"g"}
      /> 
      <Card 
        name={"Fats"}
        currValue={50}
        targetValue={100}
        units={"g"}
      /> 
    </View>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
