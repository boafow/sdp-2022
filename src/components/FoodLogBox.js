import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import SwipeableText from './SwipeableText';
const FoodLogBox = (props) => {
  const [views, setViews] = useState([]);
  const handleButtonPress = () => {
    const newView = (
        <Text key={views.length} style={styles.logText}>Testing text updating</Text>
      
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
        <Text style={ {padding: 5,fontWeight: 'bold', color:'#52BB40'} }>{props.mealType}</Text>
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
          <Text style={styles.text}>Add {props.mealType} </Text>
          <Entypo style = {{color: '#FA9800'}}name="camera" size={24} color="black" />
        </Button>
          
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  mealLogBox: {
    flexDirection: 'column',
    shadowColor: '#001',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .25,
    shadowRadius: 5,
    elevation: 1,
    minHeight: 180,
    marginVertical: 2,
    backgroundColor:'#FFFFFF',
    borderRadius: 10,
    shadowColor: '#52BB40',
    borderWidth: .2,
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
  
    color: '#0080C9'

  },
  text: {
    paddingTop: 2, 
    paddingRight: 5,
    color: '#FA9800'
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