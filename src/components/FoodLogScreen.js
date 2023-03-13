import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import FoodLogBox from './FoodLogBox';
const FoodLogScreen = () => {

  return(
    <View style= {styles.container}>
      <ScrollView useNativeDrive={true} style={styles.scrollingPart}>
        <FoodLogBox 
          mealType="Breakfast"
          />
          <FoodLogBox 
          mealType="Lunch"
          />
          <FoodLogBox 
          mealType="Dinner"
          />
          <FoodLogBox 
          mealType="Snacks"
          />
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
