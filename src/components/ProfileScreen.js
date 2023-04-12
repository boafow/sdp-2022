import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, RefreshControl, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getGLOBAL_USERNAME } from './GlobalUsername';

export default ProfileScreen = () => {
  /* REACT-NATIVE HOOK TO HANDLE REFRESH STATE */
  const [refreshing, setRefreshing] = useState(false);

  /* REACT-NATIVE STATES TO HOLD USER PROFILE AGE, HEIGHT, ETC. */
  const [valueAge, setValueAge] = useState('');
  const [valueHeightFeet, setValueHeightFeet] = useState(null);
  const [valueHeightInches, setValueHeightInches] = useState(null);
  const [valueWeight, setValueWeight] = useState(null);
  const [valueGender, setValueGender] = useState(null);
  const [valueActivity, setValueActivity] = useState(null);

  /* REACT-NATIVE STATES TO HOLD MACRO CURRENT VALUES */
  const [valueCurrentCalories, setValueCurrentCalories] = useState(null);
  const [valueCurrentCarbs, setValueCurrentCarbs] = useState(null);
  const [valueCurrentProteins, setValueCurrentProteins] = useState(null);
  const [valueCurrentFats, setValueCurrentFats] = useState(null);

  /* REACT-NATIVE STATES TO HOLD MACRO GOAL VALUES */
  const [valueGoalCalories, setValueGoalCalories] = useState(null);
  const [valueGoalCarbs, setValueGoalCarbs] = useState(null);
  const [valueGoalProteins, setValueGoalProteins] = useState(null);
  const [valueGoalFats, setValueGoalFats] = useState(null);

  /* FUNCTION TO HANDLE REFRESHING OF DATA */
  const handleRefresh = async () => {
    setRefreshing(true);
    let tmp1 = await getBiometricMeasurements();
    let tmp2 = await getMacroValues();
    setRefreshing(false);
  }

  /* DISPLAYS ALERT WITH BMR CALCULATIONS */
  const showMessageAlert = (data) => {
      Alert.alert(
        'BMR Calculations',  // Title of the alert
        JSON.stringify(data, null, 2),  // Message of the alert
        [
          {
            text: 'OK', // Button text
            onPress: () => console.log('ProfileScreen.js', 'OK pressed') // Action to be performed when OK button is pressed
          }
        ]
      );
  };

  /* FETCHES BMR CACLUALTIONS FROM API GATEWAY: PPH/getBMRCalculations */
  const getBMRCalculations = async () => {
      const totalHeightInches = (parseInt(valueHeightFeet) * 12) + parseInt(valueHeightInches);
      const totalHeightCentimeters = totalHeightInches * 2.54;
      const totalWeightKilograms = valueWeight / 2.205;
      const base_url = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getBMRCalculations'
      const params = `?weight=${totalWeightKilograms}&height=${totalHeightCentimeters}&age=${valueAge}&gender=${valueGender}&activity=${valueActivity}`;
      const url = base_url + params;
      console.log('ProfileScreen.js PPH/getBMRCalculations URL:', url);
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };
      await fetch(url, requestOptions)
      .then(response => response.json())
      .then((data) => {
          console.log('ProfileScreen.js', data);
          showMessageAlert(data);
      })
      .catch(error => console.error(error));
  }
  /* FETCH BIOMETRIC MEASUREMENTS (AGE, HEIGHT, WEIGHT, ETC.) USING GET PPH/setUserData */
  const getBiometricMeasurements = async () => {
    const base_url = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/setUserData';
    const username = getGLOBAL_USERNAME()
    const params = `?username=${username}`
    const url = base_url + params;
    console.log('ProfileScreen.js PPH/setUserData URL:', url);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    await fetch(url, requestOptions)
      .then(response => response.json())
      .then((data) => {
          if(data.message === 'User data retrieved successfully'){
            const tmpJSON = data.data;
            console.log('ProfileScreen.js PPH/setUserData response:', tmpJSON);
            setValueAge(tmpJSON['age'].toString());
            setValueHeightFeet(tmpJSON['height_feet'].toString());
            setValueHeightInches(tmpJSON['height_inches'].toString());
            setValueGender(tmpJSON['gender'].toString());
            setValueWeight(tmpJSON['weight'].toString());
            setValueActivity(tmpJSON['activity'].toString());
          }
          else {
            console.log('ProfileScreen.js 92: Error with GET PPH/setUserData');
            setValueAge(null);
            setValueHeightFeet(null);
            setValueHeightInches(null);
            setValueGender(null);
            setValueWeight(null);
            setValueActivity(null);
          }
          
      })
      .catch(error => console.error(error));
  }
  /* SET OR UPDATE BIOMETRIC MEASUREMENTS USING POST PPH/setUserData */
  const setBiometricMeasurements = async () => {
    var tmpBody = {
      'username': getGLOBAL_USERNAME(),
      'height_feet': parseInt(valueHeightFeet),
      'height_inches': parseInt(valueHeightInches),
      'weight': parseInt(valueWeight),
      'age': parseInt(valueAge),
      'gender': valueGender,
      'activity': valueActivity
    }
    var requestOptions = {
      method: 'POST',
      httpMethod: 'POST',
      body: JSON.stringify(tmpBody)
    }
    const url = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/setUserData';
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      if(data.message === 'User data retrieved successfully'){
        console.log('ProfileScreen.js 130:', data);
      }
      if(data.message === 'User data added successfully'){
        console.log('ProfileScreen.js 133:', data);
      }
      else{
        console.log('ProfileScreen.js 136: Error with POST PPH/setUserData')
        console.log(data);
      }
    })
    .catch(error => console.error(error));
  }
  /* GET MACRONUTRIENT VALUES USING GET PPH/? */
  const getMacroValues = async () => {
    const base_url = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/setUserGoals';
    const username = getGLOBAL_USERNAME()
    const params = `?user_id=${username}`
    const url = base_url + params;
    console.log('ProfileScreen.js 149: PPH/setUserGoals URL -->', url);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    await fetch(url, requestOptions)
      .then(response => response.json())
      .then((data) => {
          if(data.message === 'User data retrieved successfully'){
            const tmpJSON = data.data[0];
            console.log('ProfileScreen.js 159: GET PPH/setUserGoals response:', tmpJSON);
            /* SET MACRONUTRIENT CURRENT & GOAL VALUE STATES */
            setValueCurrentCalories(tmpJSON['current_calories']);
            setValueCurrentCarbs(tmpJSON['current_carbs']);
            setValueCurrentFats(tmpJSON['current_fat']);
            setValueCurrentProteins(tmpJSON['current_protein']);
            setValueGoalCalories(tmpJSON['calories_goal']);
            setValueGoalCarbs(tmpJSON['carb_goal']);
            setValueGoalFats(tmpJSON['fat_goal']);
            setValueGoalProteins(tmpJSON['protein_goal']);
          }
          else {
            console.log('ProfileScreen.js 171: Error with GET PPH/setUserGoals');
            /* MAKE NULL: MACRONUTRIENT CURRENT & GOAL VALUE STATES */
            setValueCurrentCalories(null);
            setValueCurrentCarbs(null);
            setValueCurrentFats(null);
            setValueCurrentProteins(null);
            setValueGoalCalories(null);
            setValueGoalCarbs(null);
            setValueGoalFats(null);
            setValueGoalProteins(null);
          }
      })
      .catch(error => console.error(error));
  }
  /* SET MACRONUTRIENT VALUES USING GET PPH/? */
  const setMacroValues = async () => {
    var tmpBody = {
      'user_id': getGLOBAL_USERNAME(),
      'current_calories': valueCurrentCalories,
      'current_carbs': valueCurrentCarbs,
      'current_fat': valueCurrentFats,
      'current_protein': valueCurrentProteins,
      'calories_goal': valueGoalCalories,
      'carb_goal': valueGoalCarbs,
      'fat_goal': valueGoalFats,
      'protein_goal': valueGoalProteins
    }
    var requestOptions = {
      method: 'POST',
      httpMethod: 'POST',
      body: JSON.stringify(tmpBody)
    }
    const url = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/setUserGoals';
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      if(data.message === 'Record added/updated successfully'){
        console.log('ProfileScreen.js 202: POST PPH/setUserGoals', data);
      }
      else{
        console.log('ProfileScreen.js 205: Error with POST PPH/setUserGoals', data);
      }
    })
    .catch(error => console.error(error));
  }
  /* HTML & JSX CODE */
  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollingPart}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
      >
          {/* VIEW FOR HEADING + SUBHEADING */}
          <View style={{padding: 15}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>User Profile</Text>
            <Text></Text>
            <Text style={{fontSize: 22, textAlign: 'center'}}>Macronutrient Goals</Text>
          </View>
          {/* CURRENT CALORIES */}
          <Text style={styles.text_header}>Current Calories Consumed:</Text>
          <Text style={styles.text_instruction}>Enter in the current # of calories you have consumed today.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(currentCalories) => setValueCurrentCalories(currentCalories)}
            value={valueCurrentCalories}
            keyboardType='numeric'
          />
          {/* CALORIE GOAL */}
          <Text style={styles.text_header}>Calorie Goal:</Text>
          <Text style={styles.text_instruction}>Enter in the # of calories you would like to consume today.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(goalCalories) => setValueGoalCalories(goalCalories)}
            value={valueGoalCalories}
            keyboardType='numeric'
          />
          {/* CURRENT CARBS */}
          <Text style={styles.text_header}>Current Carbohydrates Consumed:</Text>
          <Text style={styles.text_instruction}>Enter in the current # of carbs you have consumed today.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(currentCarbs) => setValueCurrentCarbs(currentCarbs)}
            value={valueCurrentCarbs}
            keyboardType='numeric'
          />
          {/* CARB GOAL */}
          <Text style={styles.text_header}>Carbohydrates Goal:</Text>
          <Text style={styles.text_instruction}>Enter in the # of carbs you would like to consume today.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(goalCarbs) => setValueGoalCarbs(goalCarbs)}
            value={valueGoalCarbs}
            keyboardType='numeric'
          />
          {/* CURRENT PROTEINS */}
          <Text style={styles.text_header}>Current Protein Consumed:</Text>
          <Text style={styles.text_instruction}>Enter in the current # of grams of protein you have consumed today.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(currentProtein) => setValueCurrentProteins(currentProtein)}
            value={valueCurrentProteins}
            keyboardType='numeric'
          />
          {/* PROTEIN GOAL */}
          <Text style={styles.text_header}>Protein Goal:</Text>
          <Text style={styles.text_instruction}>Enter in the # of grams of protein you would like to consume today.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(goalProtein) => setValueGoalProteins(goalProtein)}
            value={valueGoalProteins}
            keyboardType='numeric'
          />
          {/* CURRENT FATS */}
          <Text style={styles.text_header}>Current Fat Consumed:</Text>
          <Text style={styles.text_instruction}>Enter in the current # of grams of fat you have consumed today.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(currentFat) => setValueCurrentFats(currentFat)}
            value={valueCurrentFats}
            keyboardType='numeric'
          />
          {/* FATS GOAL */}
          <Text style={styles.text_header}>Fat Goal:</Text>
          <Text style={styles.text_instruction}>Enter in the # of grams of fat you would like to consume today.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(goalFats) => setValueGoalFats(goalFats)}
            value={valueGoalFats}
            keyboardType='numeric'
          />
          <View>
          <Text style={styles.text_header}>Update Macronutrient Metrics</Text>
          {valueCurrentCalories && valueCurrentCarbs && valueCurrentFats && valueCurrentProteins && 
           valueGoalCalories && valueGoalCarbs && valueGoalFats && valueGoalProteins ?
              <TouchableOpacity onPress={setMacroValues} style={styles.button_updateMacros}>
                <Text style={styles.text_button}>Update Macronutrient Values</Text>
              </TouchableOpacity>
              :
              <Text>
                  First, please enter values for the current / goal macronutrient values.
              </Text>
          }
        </View>
          {/* VIEW FOR SUBHEADING */}
          <View style={{padding: 15}}>
            <Text style={{fontSize: 22, textAlign: 'center'}}>Biometric Measurements</Text>
          </View>
          {/* AGE */}
          <Text style={styles.text_header}>Age:</Text>
          <Text style={styles.text_instruction}>Enter in your age in # of years.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(age) => setValueAge(age)}
            value={valueAge}
            keyboardType='numeric'
          />
          {/* HEIGHT IN FEET */}
          <Text style={styles.text_header}>Height in Feet:</Text>
          <Text style={styles.text_instruction}>Enter in your height in # of feet.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(height_feet) => setValueHeightFeet(height_feet)}
            value={valueHeightFeet}
            keyboardType='numeric'
          />
          {/* HEIGHT IN INCHES */}
          <Text style={styles.text_header}>Height in Inches:</Text>
          <Text style={styles.text_instruction}>Enter in your height in # of inches.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(height_inches) => setValueHeightInches(height_inches)}
            value={valueHeightInches}
            keyboardType='numeric'
          />
          {/* WEIGHT */}
          <Text style={styles.text_header}>Weight:</Text>
          <Text style={styles.text_instruction}>Enter in your weight in # of pounds.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(weight) => setValueWeight(weight)}
            value={valueWeight}
            keyboardType='numeric'
          />
          {/* GENDER */}
          <Text style={styles.text_header}>Gender:</Text>
          <Text style={styles.text_instruction}>Enter in your gender as M or F.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(gender) => setValueGender(gender)}
            value={valueGender}
          />
          {/* ACTIVITY LEVEL */}
          <Text style={styles.text_header}>Activity Level:</Text>
          <Text style={styles.text_instruction}>Enter in your activity level as 1 of these 4 choices:</Text>
          <Text>{'\u2022'} S for Sedentary</Text>
          <Text>{'\u2022'} O for Occasionally Active</Text>
          <Text>{'\u2022'} A for Active</Text>
          <Text style={styles.text_instruction}>{'\u2022'} H for Highly Active</Text>
          <TextInput
            style={styles.input}
            onChangeText={(activity) => setValueActivity(activity)}
            value={valueActivity}
          />
        <View>
          <Text style={styles.text_header}>Calculate Basal Metabolic Rate</Text>
          {valueAge && valueHeightFeet && valueHeightInches && valueGender && valueActivity ?
              <TouchableOpacity onPress={getBMRCalculations} style={styles.button_bmr}>
                <Text style={styles.text_button}>Calculate BMR</Text>
              </TouchableOpacity>
              :
              <Text>
                  First, please enter values for age, height, weight, gender, and activity level.
              </Text>
              
          }
        </View>
        <Text></Text>
        <View>
          <Text style={styles.text_header}>Update Biometric Measurements</Text>
          {valueAge && valueHeightFeet && valueHeightInches && valueGender && valueActivity ?
              <TouchableOpacity onPress={setBiometricMeasurements} style={styles.button_updateProfile}>
                <Text style={styles.text_button}>Update Biometric Measurements</Text>
              </TouchableOpacity>
              :
              <Text>
                  First, please enter values for age, height, weight, gender, and activity level.
              </Text>
          }
        </View>
      </ScrollView>
    </View>
  );
};
/* STYLESHEET */
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
    mainContainer: {
      flex:1, 
      paddingTop: 50, 
      paddingHorizontal: 15,
    },
    scrollingPart: {
      flex: 1,
    },
    text_header: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingBottom: 5,
    },
    text_instruction: {
      fontSize: 14,
      textAlign: 'left',
      paddingBottom: 5
    },
    text_button: {
      textAlign: 'center', 
      fontWeight: 'bold'
    },
    input: {
      borderWidth: 3,
      borderColor: 'black',
      fontSize: 12,
      width: '100%',
      padding: 10,
      marginBottom: 10
    },
    button_bmr: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    button_updateProfile: {
      backgroundColor: '#55ba45',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    button_updateMacros: {
      backgroundColor: '#efad32',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    }
});