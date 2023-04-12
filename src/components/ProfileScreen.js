import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Button, Alert, RefreshControl, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default ProfileScreen = () => {
    /* React-Native hook to handle refresh state */
    const [refreshing, setRefreshing] = useState(false);

    /* Function to handle refreshing data */
    const handleRefresh = async () => {
      setRefreshing(true);
      /* REFRESH DATA HERE */
      setRefreshing(false);
  }

    const [valueAge, setValueAge] = useState(null);
    const [valueHeightFeet, setValueHeightFeet] = useState(null);
    const [valueHeightInches, setValueHeightInches] = useState(null);
    const [valueWeight, setValueWeight] = useState(null);
    const [valueGender, setValueGender] = useState(null);
    const [valueActivity, setValueActivity] = useState(null);

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

    const getBMRCalculations = async () => {
        const totalHeightInches = valueHeightFeet * 12 + valueHeightInches;
        const totalHeightCentimeters = totalHeightInches * 2.54;
        const totalWeightKilograms = valueWeight / 2.205;
        const base_url = 'https://y3xs5g62z3.execute-api.us-east-1.amazonaws.com/test/getBMRCalculations'
        const params = `?weight=${totalWeightKilograms}&height=${totalHeightCentimeters}&age=${valueAge}&gender=${valueGender}&activity=${valueActivity}`;
        const url = base_url + params;
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

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh}/>}
        >
            <Text style={styles.text_header}>Age:</Text>
            <Text style={styles.text_instruction}>Enter in your age in # of years.</Text>
            <TextInput
              style={styles.input}
              onChangeText={(age) => setValueAge(age)}
              value={valueAge}
              keyboardType='numeric'
            />

            <Text style={styles.text_header}>Height in Feet:</Text>
            <Text style={styles.text_instruction}>Enter in your height in # of feet.</Text>
            <TextInput
              style={styles.input}
              onChangeText={(height_feet) => setValueHeightFeet(height_feet)}
              value={valueHeightFeet}
              keyboardType='numeric'
            />
            
            <Text style={styles.text_header}>Height in Inches:</Text>
            <Text style={styles.text_instruction}>Enter in your height in # of inches.</Text>
            <TextInput
              style={styles.input}
              onChangeText={(height_inches) => setValueHeightInches(height_inches)}
              value={valueHeightInches}
              keyboardType='numeric'
            />
            
            <Text style={styles.text_header}>Weight:</Text>
            <Text style={styles.text_instruction}>Enter in your weight in # of pounds.</Text>
            <TextInput
              style={styles.input}
              onChangeText={(weight) => setValueWeight(weight)}
              value={valueWeight}
              keyboardType='numeric'
            />
            
            <Text style={styles.text_header}>Gender:</Text>
            <Text style={styles.text_instruction}>Enter in your gender as M or F.</Text>
            <TextInput
              style={styles.input}
              onChangeText={(gender) => setValueGender(gender)}
              value={valueGender}
            />
            
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
            <Text style={styles.text_header}>Submit Profile</Text>
            {valueAge && valueHeightFeet && valueHeightInches && valueGender && valueActivity ?
                // <Button 
                //     title='Calculate Basal Metabolic Rate'
                //     onPress={getBMRCalculations}
                // >
                // </Button>
                <TouchableOpacity onPress={getBMRCalculations} style={styles.button}>
                  <Text style={styles.buttonText}>Press Me</Text>
                </TouchableOpacity>
                :
                <Text>
                    Please enter values for age, height, weight, gender, and activity level.
                </Text>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 15
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