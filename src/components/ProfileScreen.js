import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native';
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


    const [openAge, setOpenAge] = useState(false);
    const [openHeightFeet, setOpenHeightFeet] = useState(false);
    const [openHeightInches, setOpenHeightInches] = useState(false);

    const [valueAge, setValueAge] = useState(null);
    const [itemsAge, setItemsAge] = useState(ageItems);

    const [valueHeightFeet, setValueHeightFeet] = useState(null);
    const [itemsHeightFeet, setItemsHeightFeet] = useState(heightFeetItems);

    const [valueHeightInches, setValueHeightInches] = useState(null);
    const [itemsHeightInches, setItemHeightInches] = useState(heightInchesItems);

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
                placeholder={'Select your age'}
            />
            <Text style={styles.text}>Height:</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{ flex: 1, width: '50%' }}>
                    <DropDownPicker
                        open={openHeightFeet}
                        value={valueHeightFeet}
                        items={itemsHeightFeet}
                        setOpen={setOpenHeightFeet}
                        setValue={setValueHeightFeet}
                        setItems={setItemsHeightFeet}
                        placeholder={'Select your height (ft)'}
                    />
                </View>
                <View style={{ flex: 1, width: '50%' }}>
                    <DropDownPicker
                        open={openHeightInches}
                        value={valueHeightInches}
                        items={itemsHeightInches}
                        setOpen={setOpenHeightInches}
                        setValue={setValueHeightInches}
                        setItems={setItemHeightInches}
                        placeholder={'Select your height (in)'}
                    />
                </View>
            </View>
            <Button 
                title='Log to Console'
                onPress={() => {console.log(valueAge, valueHeightFeet, valueHeightInches);}}
            >
            </Button>
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
      paddingTop: 5,
      paddingBottom: 5
    },
    pickerContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden'
      },
  });