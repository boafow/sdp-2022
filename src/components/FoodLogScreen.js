import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl, Text } from 'react-native';
import FoodLogBox from './FoodLogBox';
import { getGLOBAL_USERNAME } from './GlobalUsername';

const FoodLogScreen = () => {

  /* HARDCODED TIME RANGE ARRAY; USE WITH FLATLIST */
  const timeRangeItems = [
    {id: 1, label: 'All Time', value: 'all_time'},
    {id: 2, label: 'Past 24 Hours', value: 'past_24_hours'},
    {id: 3, label: 'Past Week', value: 'past_week'},
    {id: 4, label: 'Past Month', value: 'past_month'}
  ];

  /* REFRESH STATE + MEAL ARRAY STATES */
  const [refreshing, setRefreshing] = useState(false);
  const [mealArray, setMealArray] = useState(null);
  const [mealArrayBreakfast, setMealArrayBreakfast] = useState(null);
  const [mealArrayLunch, setMealArrayLunch] = useState(null);
  const [mealArrayDinner, setMealArrayDinner] = useState(null);
  var array_breakfast = [];
  var array_lunch = [];
  var array_dinner = [];
  
  /* API CALL TO API GATEWAY: PPH/getMealRecord */
  const getMealRecord = async () => {
    const apiUrl = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getMealRecord';
    const user_id = getGLOBAL_USERNAME();
    const time_range = 'all_time';
    const urlWithQueryParams = `${apiUrl}?username=${user_id}&time_range=${time_range}`;
    console.log('FoodLogScreen.js', urlWithQueryParams);
    try {
      let response = await fetch(urlWithQueryParams);
      let json = await response.json();
      if (json['message'] !== 'Internal server error') {
        console.log('FoodLogScreen.js', json.mealRecords, '\n');
        /* IF API RESPONSE WORKS BUT THERE ARE NO MEAL RECORDS */
        if(json.mealRecords.length === 0) {
          setMealArray(null);
        }  
        else {
          setMealArray(json.mealRecords);
        }
        /* CREATE ARRAYS BASED ON MEALTIME */
        for (let i = 0; i < json.mealRecords.length; i++) {
          //console.log('FoodLogScreen.js', json.mealRecords[i].filename);
          const tmpMealRecord = json.mealRecords[i];
          if(tmpMealRecord.mealTime === 'breakfast') {
            array_breakfast.push(tmpMealRecord);
          }
          if(tmpMealRecord.mealTime === 'lunch') {
            array_lunch.push(tmpMealRecord);
          }
          if(tmpMealRecord.mealTime === 'dinner') {
            array_dinner.push(tmpMealRecord);
          }
        }
        /* SET STATES FOR MEALTIME ARRAYS */
        setMealArrayBreakfast(array_breakfast);
        setMealArrayLunch(array_lunch);
        setMealArrayDinner(array_dinner);
      }
      else {
          console.log('FoodLogScreen.js: Internal server error with PPHAPI/getMealRecord')
      }
    } catch (error) {

    }
  };

  /* LOGIC FOR SWIPE TO REFRESH */
  const handleRefresh = async () => {
    setRefreshing(true);
      getMealRecord();
    setRefreshing(false);
}
  return(
    <View style={styles.container}>
      <ScrollView 
        useNativeDrive={true} 
        style={styles.scrollingPart}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
      >
        <View style={{padding: 15}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Meal Log</Text>
          <Text style={{fontSize: 20}}>Scanned Nutrition Labels</Text>
          <Text></Text>
        </View>
        <FoodLogBox
          mealType="Breakfast"
          mealArray={mealArrayBreakfast}
        />
        <Text></Text>
        <Text></Text>
        <FoodLogBox
          mealType="Lunch"
          mealArray={mealArrayLunch}
        />
        <Text></Text>
        <Text></Text>
        <FoodLogBox
          mealType="Dinner"
          mealArray={mealArrayDinner}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  scrollingPart: {
    flex: 1,
  }
});

export default FoodLogScreen;