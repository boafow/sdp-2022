import {React } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Card from './Card'
import Cam from './Upload'
const Dashboard = () => {
    
    return(
        <View style={styles.container}>
            <ScrollView >
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
            <View style={styles.cameraIcon}>
            <FontAwesome name="camera" size={24} color="black" />
    
            </View>
        </View>
    ); 
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFB6C1',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 50,
        marginBottom: 15
    },
    cameraIcon: {
        alignSelf: 'center',
        margin: 10,
        height: 50,
        width: 50,
    }
  });
export default Dashboard;


