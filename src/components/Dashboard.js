import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, RefreshControl, Text } from 'react-native';
import NutrientCircles from './NutrientCircles'
import Recommendations from './Recommendations';
import { getGLOBAL_USERNAME } from './GlobalUsername';

const Dashboard = () => {
    /* REACT-NATIVE HOOKS / STATES FOR REFRESHING + NUTRIENT DATA + RECOMMENDATION DATA */
    const [refreshing, setRefreshing] = useState(false);
    const [nutrientCircleData, setNutrientCircleData] = useState(null);
    const [recommendationsData, setRecommendationsData] = useState(null);
    /* QUERYING PPH/getDashboardValues FOR NUTRIENT CIRCLES*/
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
    /* QUERYING PPH/getRecipeRecommendations FOR RECOMMENDATIONS*/
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
    /* HANDLES REFRESH LOGIC, PULLS NEW DATA FOR REFRESH SWIPE IN SCROLL VIEW*/
    const handleRefresh = async () => {
        setRefreshing(true);
        setNutrientCircleData(null);
        setRecommendationsData(null);
        let tmp1 = await refreshNutrientCircles();
        let tmp2 = await refreshRecommendations();
        //console.log('tmp1', recommendationsData);
        //console.log('tmp2', nutrientCircleData);
        //setNutrientCircleData(tmp1);
        //setRecommendationsData(tmp2);
        setRefreshing(false);
    }
    /* CALLS HANDLEREFESH() FUNCTION TO LOAD DATA */
    useEffect(() => {
        handleRefresh();
    }, []);

    return (
        <ScrollView 
            style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
        >
            {nutrientCircleData !== null ? 
                <NutrientCircles refreshedData={nutrientCircleData}/> 
                : 
                <Text>No data for nutrient circles for {getGLOBAL_USERNAME()}. Swipe down to refresh dashboard.</Text>
            }
            <Text></Text>
            {recommendationsData !== null ? 
                <Recommendations refreshedData={recommendationsData}/> 
                : 
                <Text>No data for recommendations for {getGLOBAL_USERNAME()}. Swipe down to refresh dashboard.</Text>
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 50,
        marginBottom: 1,
        padding: 15
    },
});
export default Dashboard;