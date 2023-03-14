import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import NutrientCircles from './NutirentCircles'
import Recommendations from './Recommendations';
const Dashboard = () => {
    return (
        <ScrollView style={styles.container}>
            <NutrientCircles />
            <Recommendations />
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 50,
        marginBottom: 1
    },
});
export default Dashboard;
  

