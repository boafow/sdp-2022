import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Button, Alert, RefreshControl, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default ProfileScreen = () => {
  /* REACT-NATIVE HOOK TO HANDLE REFRESH STATE */
  const [refreshing, setRefreshing] = useState(false);

  /* FUNCTION TO HANDLE REFRESHING OF DATA */
  const handleRefresh = async () => {
    setRefreshing(true);
    /* REFRESH DATA HERE */
    setRefreshing(false);
  }
  /* REACT-NATIVE STATES TO HOLD USER PROFILE AGE, HEIGHT, ETC. */
  const [valueAge, setValueAge] = useState(null);
  const [valueHeightFeet, setValueHeightFeet] = useState(null);
  const [valueHeightInches, setValueHeightInches] = useState(null);
  const [valueWeight, setValueWeight] = useState(null);
  const [valueGender, setValueGender] = useState(null);
  const [valueActivity, setValueActivity] = useState(null);

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
      console.log('ProfileScreen.js:', url);
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

  /* HTML / JSX CODE */
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
            <Text style={{fontSize: 20}}>Macro Goals + Biometric Measurements</Text>
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
              <TouchableOpacity onPress={getBMRCalculations} style={styles.button}>
                <Text style={styles.text_button}>Calculate BMR</Text>
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
      marginBottom: 25
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
});