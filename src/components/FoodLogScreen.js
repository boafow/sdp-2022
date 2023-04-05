import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import FoodLogBox from './FoodLogBox';
import { getGLOBAL_USERNAME } from './GlobalUsername';

const FoodLogScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [mealArray, setMealArray] = useState(null);

  var array_breakfast = [];
  var array_lunch = [];
  var array_dinner = [];
  
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
        setMealArray(json.mealRecords);
        for (let i = 0; i < json.mealRecords.length; i++) {
          console.log('FoodLogScreen.js', json.mealRecords[i].filename);
        }
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
    <View style= {styles.container}>
      <ScrollView 
        useNativeDrive={true} 
        style={styles.scrollingPart}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
      >
        <FoodLogBox 
            mealType="Breakfast"
            //mealArray={array_breakfast}
            mealArray={mealArray}
          />
          <FoodLogBox 
            mealType="Lunch"
            mealArray={mealArray}
          />
          <FoodLogBox 
            mealType="Dinner"
            mealArray={mealArray}
          />
          {/* <FoodLogBox 
          mealType="Snacks"
          /> */}
      </ScrollView>
    </View>
  );
      
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 4,
    paddingTop: 50,
  },
  scrollingPart: {
    flex: 1,
    //backgroundColor: 'pink'
  }
});

export default FoodLogScreen;