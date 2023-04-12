import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import FoodLogBox from './FoodLogBox';
import { getGLOBAL_USERNAME } from './GlobalUsername';
import DropDownPicker from 'react-native-dropdown-picker';

const FoodLogScreen = () => {

  /* HARDCODED TIME RANGE ARRAY */
  const timeRangeItems = [
    {label: 'All Time', value: 'all_time'},
    {label: 'Past 24 Hours', value: 'past_24_hours'},
    {label: 'Past Week', value: 'past_week'},
    {label: 'Past Month', value: 'past_month'}
  ];
  /* HOOKS FOR TIME RANGE DROPDOWN PICKER */
  const [openTimeRange, setOpenTimeRange] = useState(false);
  const [valueTimeRange, setValueTimeRange] = useState(null);
  const [itemsTimeRange, setItemsTimeRange] = useState(timeRangeItems);

  /* REFRESH STATE + MEAL ARRAY STATES */
  const [refreshing, setRefreshing] = useState(false);
  const [mealArray, setMealArray] = useState(null);
  const [mealArrayBreakfast, setMealArrayBreakfast] = useState(null);
  const [mealArrayLunch, setMealArrayLunch] = useState(null);
  const [mealArrayDinner, setMealArrayDinner] = useState(null);
  var array_breakfast = [];
  var array_lunch = [];
  var array_dinner = [];
  
  /* API CALL TO API GATEWAY: getMealRecord */
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
        /* API RESPONSE WORKS BUT THERE ARE NO MEAL RECORDS */
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
    <View style= {styles.container}>
      <ScrollView 
        useNativeDrive={true} 
        style={styles.scrollingPart}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
      >
        <FoodLogBox
          mealType="Breakfast"
          mealArray={mealArrayBreakfast}
        />
        <FoodLogBox
          mealType="Lunch"
          mealArray={mealArrayLunch}
        />
        <FoodLogBox
          mealType="Dinner"
          mealArray={mealArrayDinner}
        />
        {/* <DropDownPicker
          open={openTimeRange}
          value={valueTimeRange}
          items={itemsTimeRange}
          setOpen={setOpenTimeRange}
          setValue={setValueTimeRange}
          setItems={setItemsTimeRange}
          maxHeight={175}
          placeholder={'Select time range for meal log'}
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