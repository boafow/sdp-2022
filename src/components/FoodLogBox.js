import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import SwipeableText from './SwipeableText';
const FoodLogBox = (props) => {
  const [views, setViews] = useState([]);
  const handleButtonPress = () => {
    const newView = (
        <Text key={views.length} style={styles.text}>Testing text updating</Text>
      
    );
    setViews([...views, newView]);
  };
  const handleDelete = (index) => {
    const newItems = [...views];
    newItems.splice(index, 1);
    setViews(newItems);
  };

  return(
    <View style={styles.mealLogBox}>
      <View style={styles.titleBlock}>
        <Text style={ {padding: 5,fontWeight: 'bold', color:'black'} }>{props.mealType}</Text>
      </View>
      <View style={styles.container}>
        {views.map((text, index) => (
          <SwipeableText
            righButtonWidth={100}
            key={index}
            useNativeDriver={true} 
            text={text} onDelete={() => handleDelete(index)} 
            friction={100} // <-- Adjust the friction to slow down the animation
            tension={10} // <-- Adjust the tension to change the stiffness of the spring
            />
      ))}
      </View>
      <View style={styles.logText}>
        <View style={styles.foodItemText}>
          
        </View>
        

      </View>
      <View style={styles.add}>
        <Button style={{height:40}} onPress={handleButtonPress}>
          <Text style={{paddingTop: 2, paddingRight: 5}}>Add {props.mealType} </Text>
          <Entypo style = {{}}name="camera" size={24} color="black" />
        </Button>
          
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  mealLogBox: {
    flexDirection: 'column',
    minHeight: 140,
    marginVertical: 10,
    backgroundColor:'#F5F5DC',
    borderRadius: 10,
    shadowColor: 'grey',
    borderWidth: 1,
    borderColor: 'grey'
  },
  insideBox: {
    flex: 1,
    margin: 10,
    backgroundColor: 'pink'
  },
  titleBlock:{
    flex: 1,
    margin: 4,
    backgroundColor: 'white',
    borderRadius: 10
  },
  logText:{
    flex: 1,
    margin: 4,
    marginLeft: 15,

  },
  text: {
    width: 200,
    flexWrap: 'wrap',
    //textAlign: 'center',
  },
  foodItemText: {
    marginTop: 4,
    backgroundColor:'//#region F5F5DC',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    minHeight: 35,
    borderRadius: 10,
  },
  add:{
    flex: 1,
    borderRadius: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 4,
    minHeight: 20,
    backgroundColor: 'white'
  },
  rightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
  },
  rightButtonText: {
    color: '#fff',
  },

});

export default FoodLogBox;