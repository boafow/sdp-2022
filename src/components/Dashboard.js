import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from './Card'
const Dashboard = () => {
    return(
        <ScrollView style={styles.container}>
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
        </ScrollView>
    ); 
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFB6C1',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 50,
      marginBottom: 50
    },
  });
export default Dashboard;


