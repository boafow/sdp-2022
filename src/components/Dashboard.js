import React, {useState, useEffect} from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Card from './Card'
const Dashboard = () => {
    const [macros, setMacros] = useState(null)
    const [id, setId] = useState(0)
    const apiUrl = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getDashboardValues';
    const viewParam = 'dashboard'; // replace this with your actual view parameter value
    // append the viewParam as a query parameter to the apiUrl
    const urlWithQueryParams = `${apiUrl}?view=${viewParam}`;
    // make the API call using the modified URL
    useEffect(() => {
        fetch(urlWithQueryParams)
        .then((response) => response.json())
        .then((object) => {
            setMacros(object.data)
            console.log('Response:', object);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },[id]);
    return(
         macros ? (
        <ScrollView style={styles.container}>
            <Card 
                name={"Calories"}
                currValue={macros.calories}
                targetValue={macros.caloriesGoal}
                units={"cals"}
            /> 
            <Card 
                name={"Carbs"}
                currValue={macros.carbohydrates}
                targetValue={macros.carbohydratesGoal}
                units={"g"}
            /> 
            <Card
                name={"Protein"}
                currValue={macros.protein}
                targetValue={macros.proteinGoal}
                units={"g"}
            /> 
            <Card 
                name={"Fats"}
                currValue={macros.fats}
                targetValue={macros.fatsGoal}
                units={"g"}
            /> 
        </ScrollView>
         ) : (<Text>Loading...</Text>)
    ); 
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 50,
      marginBottom: 1
    },
  });
export default Dashboard;


