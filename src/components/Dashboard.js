import React, { useState } from 'react';
import { ScrollView, StyleSheet, RefreshControl, Text } from 'react-native';
import NutrientCircles from './NutrientCircles'
import Recommendations from './Recommendations';
import { getGLOBAL_USERNAME } from './GlobalUsername';

const Dashboard = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [nutrientCircleData, setNutrientCircleData] = useState(null);
    const [recommendationsData, setRecommendationsData] = useState(null);

    const refreshNutrientCircles = async () => {
        const apiUrl = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getDashboardValues';
        const user_id = getGLOBAL_USERNAME();
        const urlWithQueryParams = `${apiUrl}?user_id=${user_id}`;
        try {
            let response = await fetch(urlWithQueryParams);
            let json = await response.json();
            //console.log('Dashboard.js', json);
            if (json['message'] !== 'Internal server error') {
                setNutrientCircleData(json.data);
                return json.data;
            }
            else {
                console.log('Dashboard.js: Internal server error with PPHAPI/getDashboardValues')
                setNutrientCircleData(null);
            }
        } catch (error) {
            setNutrientCircleData(null);
        }
    };
    
    const refreshRecommendations = async () => {
        const apiUrl = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getRecipeRecommendations';
        const user_id = getGLOBAL_USERNAME();
        const urlWithQueryParams = `${apiUrl}?user_id=${user_id}`;
        try {
            let response = await fetch(urlWithQueryParams);
            let json = await response.json();
            //console.log('Dashboard.js', json);
            if (json['message'] !== 'Internal server error') {
                setRecommendationsData(json);
                return json;
            }
            else {
                console.log('Dashboard.js: Internal server error with PPHAPI/getRecipeRecommendations')
                setRecommendationsData(null)
            }
        } catch (error) {
            setRecommendationsData(null);
        }
    };

    const handleRefresh = async () => {
        setRefreshing(true);
        setNutrientCircleData(null);
        setRecommendationsData(null);
        let tmp1 = await refreshNutrientCircles();
        let tmp2 = await refreshRecommendations();
        //console.log('tmp1', recommendationsData);
        //console.log('tmp2', nutrientCircleData);
        setNutrientCircleData(tmp1);
        setRecommendationsData(tmp2);
        setRefreshing(false);
    }

    return (
        <ScrollView 
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
        >
            {/* <NutrientCircles refreshedData={nutrientCircleData}/>
            <Recommendations refreshedData={recommendationsData}/> */}
            {/* <NutrientCircles refreshedData={refreshNutrientCircles}/>
            <Recommendations refreshedData={refreshRecommendations}/> */}
            {nutrientCircleData !== null ? 
                <NutrientCircles refreshedData={nutrientCircleData}/> : <Text>No data for nutrient circles for {getGLOBAL_USERNAME()}</Text> }
            {recommendationsData !== null ? 
                <Recommendations refreshedData={recommendationsData}/> : <Text>No data for recommendations for {getGLOBAL_USERNAME()}</Text>}
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
  

