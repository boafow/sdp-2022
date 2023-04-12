import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { getGLOBAL_USERNAME } from './GlobalUsername';
import { getHumanReadableDate, getHumanReadableTime } from './S3DateTimeFunctions';

const FoodLogBox = (props) => {
  
  /* SETS ID'S LOCALLY SO FOR <VIEW></VIEW> COMPONENT THAT MAPS MEAL ARRAY*/
  if(props.mealArray) {
    for (let i = 0; i < props.mealArray.length; i++) {
      props.mealArray[i].id = i;
    }
  }

  /* HANDLES CAMERA ICON BUTTON PRESS */
  const handleButtonPress = () => {
    console.log('FoodLogBox.js 28: ', 'Pressed camera icon to add', props.mealType)
  }

  /* CONTAINS JSX LOGIC TO DISPLAY JSON FROM API REQUEST */
  return(
    <View style={styles.mealLogBox}>
      <View style={styles.titleBlock}>
        <Text style={ {padding: 5, fontWeight: 'bold', color:'#52BB40', fontSize: 24} }>{props.mealType}</Text>
      </View>
      <View style={styles.container}>
        {
          props.mealArray ? 
          props.mealArray.map((meal) => 
            {
              /*YOU CAN DO JAVASCRIPT CODE HERE*/
              const tmpMealDetails = JSON.parse(meal.mealDetails);
              console.log('NEIL-63', tmpMealDetails, typeof tmpMealDetails);
              const tmpMinerals = tmpMealDetails['minerals']
              console.log('NEIL-65', tmpMinerals, typeof tmpMinerals);
              /*RETURN VIEW COMPONENTS*/
              return(
                <View key={meal.id}>
                  {/*MEAL*/}
                  <Text>
                    <Text style={styles.metric}>{'Meal:\t'}</Text>
                    {meal.filename.split('_')[0]}
                  </Text>
                  {/*DATE*/}
                  <Text>
                    <Text style={styles.metric}>{'Date:\t'}</Text>
                    {getHumanReadableDate(meal.date)}</Text>
                  {/*TIME*/}
                  <Text>
                    <Text style={styles.metric}>{'Time:\t'}</Text>
                    {getHumanReadableTime(meal.time)}
                  </Text>

                  <Text></Text>

                  {/*NUTRIENTS*/}
                  <Text style={styles.metric}>Nutrients:</Text>
                  {tmpMealDetails['calories'] &&
                    <Text>{'Calories:\t\t\t'}{tmpMealDetails['calories']}</Text>
                  }
                  {tmpMealDetails['total fat'] &&
                    <Text>{'Total Fat:\t\t\t'}{tmpMealDetails['total fat'][0] + ', (' + tmpMealDetails['total fat'][1] + ')'}</Text>
                  }
                  {tmpMealDetails['saturated fat'] &&
                    <Text>{'Saturated Fat:\t'}{tmpMealDetails['saturated fat'][0] + ', (' + tmpMealDetails['saturated fat'][1] + ')'}</Text>
                  }
                  {tmpMealDetails['trans fat'] &&
                    <Text>{'Trans Fat:\t\t'}{tmpMealDetails['trans fat']}</Text>
                  }
                  {tmpMealDetails['cholesterol'] &&
                    <Text>{'Cholesterol:\t\t'}{tmpMealDetails['cholesterol'][0] + ', (' + tmpMealDetails['cholesterol'][1] + ')'}</Text>
                  }
                  {tmpMealDetails['sodium'] &&
                    <Text>{'Sodium:\t\t\t'}{tmpMealDetails['sodium'][0] + ', (' + tmpMealDetails['sodium'][1] + ')'}</Text>
                  }
                  {tmpMealDetails['total carbohydrate'] && 
                    <Text>{'Total Carbs:\t\t'}{tmpMealDetails['total carbohydrate'][0] + ', (' + tmpMealDetails['total carbohydrate'][1] + ')'}</Text>
                  }
                  {tmpMealDetails['dietary fiber'] &&
                    <Text>{'Dietary Fiber:\t\t'}{tmpMealDetails['dietary fiber'][0] + ', (' + tmpMealDetails['dietary fiber'][1] + ')'}</Text>
                  }
                  {tmpMealDetails['total sugars'] &&
                    <Text>{'Total Sugars:\t\t'}{tmpMealDetails['total sugars']}</Text>
                  }
                  {tmpMealDetails['protein'] &&
                    <Text>{'Protein:\t\t\t'}{tmpMealDetails['protein']}</Text>
                  }
                  <Text></Text>

                  {/*MINERALS*/}
                  {Object.keys(tmpMinerals).length !== 0 && <Text style={styles.metric}>Minerals:</Text>}
                  {tmpMinerals['vitamin d'] && 
                    <Text>{'Vitamin D:\t\t'}{tmpMinerals['vitamin d'][0] + ', (' + tmpMinerals['vitamin d'][1] + ')'}</Text>
                  }
                  {tmpMinerals['calcium'] && 
                    <Text>{'Calcium:\t\t\t'}{tmpMinerals['calcium'][0] + ', (' + tmpMinerals['calcium'][1] + ')'}</Text>
                  }
                  {tmpMinerals['iron'] && 
                    <Text>{'Iron:\t\t\t\t'}{tmpMinerals['iron'][0] + ', (' + tmpMinerals['iron'][1] + ')'}</Text>
                  }
                  {tmpMinerals['magnesium'] && 
                    <Text>{'Magnesium:\t\t'}{tmpMinerals['magnesium'][0] + ', (' + tmpMinerals['magnesium'][1] + ')'}</Text>
                  }
                  {tmpMinerals['phosphorus'] && 
                    <Text>{'Phosphorous:\t\t'}{tmpMinerals['phosphorus'][0] + ', (' + tmpMinerals['phosphorus'][1] + ')'}</Text>
                  }
                  {tmpMinerals['potassium'] && 
                    <Text>{'Potassium:\t\t'}{tmpMinerals['potassium'][0] + ', (' + tmpMinerals['potassium'][1] + ')'}</Text>
                  }
                  {tmpMinerals['sodium'] && 
                    <Text>{'Sodium:\t\t'}{tmpMinerals['sodium'][0] + ', (' + tmpMinerals['sodium'][1] + ')'}</Text>
                  }
                  {tmpMinerals['zinc'] && 
                    <Text>{'Zinc:\t\t'}{tmpMinerals['zinc'][0] + ', (' + tmpMinerals['zinc'][1] + ')'}</Text>
                  }
                  <Text style={{fontWeight: 'bold',fontSize: 36}}>
                    {'- - - - - - - - - - - - - - - - - - '}
                  </Text>
                </View>
            )
          }
          ) 
          : 
          <Text>No meals found for {getGLOBAL_USERNAME()}. Swipe down to refresh meal log.</Text>
        }
      </View>
      <View style={styles.logText}>
        <View 
          style={styles.foodItemText}>
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
  metric: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default FoodLogBox;