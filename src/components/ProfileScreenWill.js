import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';


export default ProfileScreenWill = () => {
  const [feet, setFeet] = useState('5');
  const [inches, setInches] = useState('6');
  const [weight, setWeight] = useState('150');
  const [age, setAge] = useState('25');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('None');
  const [Calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [exerices, setExerices] = useState('');

  return (
    <SafeAreaView>
        <View style={styles.container}>
        {/* HEIGHT */}
        <Text style={styles.label}>Height:</Text>
        <View style={styles.pickerContainer}> 
            <Picker
            style={styles.picker}
            selectedValue={feet}
            onValueChange={setFeet}
            mode={'dropdown'}
            >
            {Array.from({ length: 8 }, (_, i) => i + 3).map((value) => (
                <Picker.Item key={value} label={`${value} ft`} value={value.toString()} />
            ))}
            </Picker>

            <Picker
            style={styles.picker}
            selectedValue={inches}
            onValueChange={setInches}
            >
            {Array.from({ length: 12 }, (_, i) => i).map((value) => (
                <Picker.Item key={value} label={`${value} in`} value={value.toString()} />
            ))}
            </Picker>
        </View>

        {/* WEIGHT */}
        <Text style={styles.label}>Weight (lbs):</Text>
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={weight}
                onValueChange={setWeight}
            >
                {Array.from({ length: 300 }, (_, i) => i + 50).map((value) => (
                <Picker.Item key={value} label={value.toString()} value={value.toString()} />
                ))}
            </Picker>
        </View>
        
        {/* AGE */}
        <Text style={styles.label}>Age:</Text>
        <View style={styles.pickerContainer}>   
            <Picker
                style={styles.picker}
                selectedValue={age}
                onValueChange={setAge}
            >
                {Array.from({ length: 100 }, (_, i) => i + 10).map((value) => (
                <Picker.Item key={value} label={value.toString()} value={value.toString()} />
                ))}
            </Picker>
        </View>

        {/* DIETARY RESTRICTIONS */}
        <Text style={styles.label}>Dietary Restrictions:</Text>
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={dietaryRestrictions}
                onValueChange={setDietaryRestrictions}
            >
                <Picker.Item label="None" value="None" />
                <Picker.Item label="Vegan" value="Vegan" />
                <Picker.Item label="Vegetarian" value="Vegetarian" />
                <Picker.Item label="Peanut Allergy" value="Peanut Allergy" />
                <Picker.Item label="Lactose Intolerance" value="Lactose Intolerance" />
                <Picker.Item label="Gluten Intolerance" value="Gluten Intolerance" />
                <Picker.Item label="Dairy-Free" value="Dairy-Free" />
            </Picker>
        </View>

        <Text style={styles.label}>Calories:</Text>
        <TextInput
            style={styles.input}
            value={Calories}
            onChangeText={setCalories}
            keyboardType="numeric"
            placeholder="Enter your calories goal for the day"
        />
        <Text style={styles.label}>Protein:</Text>
        <TextInput
            style={styles.input}
            value={protein}
            onChangeText={setProtein}
            keyboardType="numeric"
            placeholder="Enter your protein goal"
        />
        <Text style={styles.label}>Carbs:</Text>
        <TextInput
            style={styles.input}
            value={carbs}
            onChangeText={setCarbs}
            keyboardType="numeric"
            placeholder="Enter your Carbs goal"
        />
        <Text style={styles.label}>Fats:</Text>
        <TextInput
            style={styles.input}
            value={fats}
            onChangeText={setFats}
            keyboardType="numeric"
            placeholder="Enter your Fat goal"
        />
        <Text style={styles.label}>Exerices:</Text>
        <TextInput
            style={styles.input}
            value={exerices}
            onChangeText={setExerices}
            keyboardType="numeric"
            placeholder="Enter your exericse goal"
        />
            
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 2,
    overflow: 'hidden'
  },
  picker: {
    flex: 1,
    width: 10, 
    height: 100,
    numberOfLines: 1
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 1,
  },
});


