import { height, width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MicronutrientBox from './MiconutrientBox';
import { ScrollView } from 'react-native-gesture-handler';

const Micronutrient = () => {
    const [number, setNumber] = useState(100)
    
  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.titleText}>nutrients</Text>
        </View>
        <ScrollView style={styles.body}>
            <MicronutrientBox title="protein" amount={number}/>
            <MicronutrientBox title="Carbohydrates" amount={number}/>
            <MicronutrientBox title="Fiber" amount={number}/>
            <MicronutrientBox title="Sugar" amount={number}/>
            <MicronutrientBox title="Fat" amount={number}/>
            <MicronutrientBox title="Saturated Fat" amount={number}/>
            <MicronutrientBox title="Polyunsaturated Fat" amount={number}/>
            <MicronutrientBox title="Monounsaturated Fat" amount={number}/>
            <MicronutrientBox title="Trans Fat" amount={number}/>
            <MicronutrientBox title="Cholestrol" amount={number}/>
            <MicronutrientBox title="Sodium" amount={number}/>
            <MicronutrientBox title="Potassium" amount={number}/>
            <MicronutrientBox title="Vitamin A" amount={number}/>
            <MicronutrientBox title="Vitamin C" amount={number}/>
            <MicronutrientBox title="Calcium" amount={number}/>
            <MicronutrientBox title="Iron" amount={number}/>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFF',
    marginTop: 50,
    margin: 4
  },
  title: {
    backgroundColor: '#FFFF',
  },
  titleText: {
    fontSize: '34',
    color: '#0080C9'
  },
  body: {
    backgroundColor: '#FFFF',
    width: '100%',
    height: 60,
    marginTop: 15
  }
 
});

export default Micronutrient;
