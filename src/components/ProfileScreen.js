import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Button, Alert } from 'react-native';
//import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';


export default ProfileScreen = () => {
    //GENERATE AGE ARRAY
    const ageItems = [];
    for (let i = 18; i <= 75; i++) {
        ageItems.push({ label: `${i}`, value: i });
    }
    //GENERATE HEIGHT FEET ARRAY
    const heightFeetItems = [];
    for (let i = 1; i <= 7; i++) {
        heightFeetItems.push({ label: `${i} ft`, value: i });
    }
    //GENERATE HEIGHT INCHES ARRAY
    const heightInchesItems = [];
    for (let i = 0; i <= 11; i++) {
        heightInchesItems.push({ label: `${i} in`, value: i });
    }
    //GENERATE WEIGHT INCHES ARRAY
    const weightItems = [];
    for (let i = 75; i <= 225; i++) {
        weightItems.push({ label: `${i} lbs`, value: i });
    }
    //HARDCODED GENDER ARRAY
    const genderItems = [{label: 'Male', value: 'M'}, {label: 'Female', value: 'F'}];

    //HARDCODED ACTIVITY ARRAY
    const activityItems = [
        {label: 'Sedentary', value: 'S'},
        {label: 'Occasionally Active', value: 'O'},
        {label: 'Active', value: 'A'},
        {label: 'Highly Active', value: 'H'}
    ];

    const [openAge, setOpenAge] = useState(false);
    const [openHeightFeet, setOpenHeightFeet] = useState(false);
    const [openHeightInches, setOpenHeightInches] = useState(false);
    const [openWeight, setOpenWeight] = useState(false);
    const [openGender, setOpenGender] = useState(false);
    const [openActivity, setOpenActivity] = useState(false);

    const [valueAge, setValueAge] = useState(null);
    const [itemsAge, setItemsAge] = useState(ageItems);

    const [valueHeightFeet, setValueHeightFeet] = useState(null);
    const [itemsHeightFeet, setItemsHeightFeet] = useState(heightFeetItems);

    const [valueHeightInches, setValueHeightInches] = useState(null);
    const [itemsHeightInches, setItemHeightInches] = useState(heightInchesItems);

    const [valueWeight, setValueWeight] = useState(null);
    const [itemsWeight, setItemsWeight] = useState(weightItems);

    const [valueGender, setValueGender] = useState(null);
    const [itemsGender, setItemsGender] = useState(genderItems);

    const [valueActivity, setValueActivity] = useState(null);
    const [itemsActivity, setItemsActivity] = useState(activityItems);

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
        <SafeAreaView>
            <Text style={styles.text}>Age:</Text>
            <DropDownPicker
                open={openAge}
                value={valueAge}
                items={itemsAge}
                setOpen={setOpenAge}
                setValue={setValueAge}
                setItems={setItemsAge}
                maxHeight={75}
                placeholder={'Select your age (years)'}
            />
            <Text style={styles.text}>Height in Feet:</Text>
            <DropDownPicker
                open={openHeightFeet}
                value={valueHeightFeet}
                items={itemsHeightFeet}
                setOpen={setOpenHeightFeet}
                setValue={setValueHeightFeet}
                setItems={setItemsHeightFeet}
                maxHeight={75}
                placeholder={'Select your height (ft)'}
            />
            <Text style={styles.text}>Height in Inches:</Text>
            <DropDownPicker
                open={openHeightInches}
                value={valueHeightInches}
                items={itemsHeightInches}
                setOpen={setOpenHeightInches}
                setValue={setValueHeightInches}
                setItems={setItemHeightInches}
                maxHeight={75}
                placeholder={'Select your height (in)'}
            />  
            <Text style={styles.text}>Weight:</Text>
            <DropDownPicker
                open={openWeight}
                value={valueWeight}
                items={itemsWeight}
                setOpen={setOpenWeight}
                setValue={setValueWeight}
                setItems={setItemsWeight}
                maxHeight={75}
                placeholder={'Select your weight (lbs)'}
            />
            <Text style={styles.text}>Gender:</Text>
            <DropDownPicker
                open={openGender}
                value={valueGender}
                items={itemsGender}
                setOpen={setOpenGender}
                setValue={setValueGender}
                setItems={setItemsGender}
                maxHeight={75}
                placeholder={'Select your gender'}
            />
            <Text style={styles.text}>Activity Level:</Text>
            <DropDownPicker
                open={openActivity}
                value={valueActivity}
                items={itemsActivity}
                setOpen={setOpenActivity}
                setValue={setValueActivity}
                setItems={setItemsActivity}
                maxHeight={75}
                placeholder={'Select your activity level'}
            />
            <Text style={styles.text}>Submit Profile</Text>
            {valueAge && valueHeightFeet && valueHeightInches && valueGender && valueActivity ?
                <Button 
                    title='Calculate Basal Metabolic Rate'
                    onPress={getBMRCalculations}
                >
                </Button>
                :
                <Text>
                    Please select values for age, height, weight, gender, and activity level.
                </Text>
            }
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingTop: 50,
    },
    pickerContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden',
    }
});